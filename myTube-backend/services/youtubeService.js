import { google } from 'googleapis'
const youtube = google.youtube('v3')

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

export const youtubeService = { getVideosFromPlaylist }
