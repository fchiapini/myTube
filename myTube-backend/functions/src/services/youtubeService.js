import { google } from 'googleapis'
import CacheService from './cacheService.js'
import * as data from '../../topics.json'

const youtube = google.youtube('v3')
const ttl = 60 * 60 * 24 // cache for 24 hours
const cache = new CacheService(ttl)

const getVideosFromPlaylistByPageToken = (playlistId, pageToken) => {
  const options = {
    key: process.env.YOUTUBE_API_KEY,
    playlistId: playlistId,
    part: 'id, contentDetails, snippet',
    maxResult: 100,
    pageToken: pageToken
  }
  return new Promise((resolve, reject) => {
    try {
      youtube.playlistItems.list(options, (error, result) => {
        if (result) {
          resolve(result)
        } else {
          throw error
        }
      })
    } catch (e) {
      reject(e)
    }
  })
}

const getVideosFromPlaylist = async (playlistId, nextPageToken, items = []) => {
  const response = await getVideosFromPlaylistByPageToken(
    playlistId,
    nextPageToken
  )
  const newItems = items.concat(response.data.items)
  if (response.data.nextPageToken) {
    return getVideosFromPlaylist(
      playlistId,
      response.data.nextPageToken,
      newItems
    )
  }
  return newItems
}

const isPlaylistFromSubject = (playlist, subject) =>
  subject.playlistIds.includes(playlist[0].snippet.playlistId)

const groupVideosBySubject = (subjects, playlists) => {
  const videosBySubject = []
  subjects.forEach((subject) => {
    const videos = [].concat(
      ...playlists.filter((playlist) =>
        isPlaylistFromSubject(playlist, subject)
      )
    )
    videosBySubject.push({
      title: subject.title,
      videos: videos
    })
  })
  return videosBySubject
}

const getVideosFromAllSubjectPlaylists = async (topic) => {
  const subjects = topic.subjects

  const promises = []
  subjects.forEach((subject) => {
    subject.playlistIds.map((playlistId) => {
      promises.push(getVideosFromPlaylist(playlistId, '', []))
    })
  })
  return Promise.all(promises).then((playlists) => {
    const videosBySubject = groupVideosBySubject(subjects, playlists)
    return { topic: topic.name, videosBySubject: videosBySubject }
  })
}

const getVideos = async (topic) => {
  const topicFromJSON = data.topics.find((tpc) => tpc.name === topic)

  if (!topicFromJSON) {
    throw Error('Topic not found!')
  }

  const videos = await cache.get(
    topicFromJSON.name,
    getVideosFromAllSubjectPlaylists(topicFromJSON)
  )
  return videos
}

export const youtubeService = { getVideos }
