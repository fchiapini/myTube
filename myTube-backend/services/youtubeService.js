import { google } from 'googleapis'
const youtube = google.youtube('v3')
import data from '../topics.json'

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
  let videosBySubject = []
  subjects.forEach((subject) => {
    let videos = [].concat.apply(
      [],
      playlists.filter((playlist) => isPlaylistFromSubject(playlist, subject))
    )
    videosBySubject.push({
      title: subject.title,
      videos: videos
    })
  })
  return videosBySubject
}

const getVideos = async (topic) => {
  const subjects = data.topics.find((tpc) => tpc.name === topic)['subjects']

  let promises = []
  subjects.forEach((subject) => {
    subject.playlistIds.map((playlistId) => {
      promises.push(getVideosFromPlaylist(playlistId, '', []))
    })
  })
  return Promise.all(promises).then((playlists) => {
    const videosBySubject = groupVideosBySubject(subjects, playlists)
    return { topic: topic, videosBySubject: videosBySubject }
  })
}

export const youtubeService = { getVideos }
