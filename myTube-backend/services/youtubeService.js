import { google } from 'googleapis'
const youtube = google.youtube('v3')

const getVideosFromPlaylist = async (playlistId, pageToken, items) => {
  const options = {
    key: process.env.YOUTUBE_API_KEY,
    playlistId: playlistId,
    part: 'id, contentDetails, snippet',
    maxResult: 50,
    pageToken: pageToken
  }

  return youtube.playlistItems.list(options)
}

const getAllVideos = async (topic) => {
  const playlistIds = PLAYLIST_IDS_BY_LANGUAGE[topic]
  let promises = []
  let allVideos = []
  if (playlistIds) {
    playlistIds.forEach((playlistId) => {
      promises.push(
        youtubeService.getAllVideos(playlistId).then(
          (videos) => videos,
          function (error) {
            res.sendStatus(500, error)
          }
        )
      )
    })
  }
  Promise.all(promises).then((playlists) => {
    res.json([].concat.apply([], playlists))
  })

  return getVideosFromPlaylist(playlistId, '', []).then((response) => {
    let playlistItems = [...response.items]
    const nextPageToken = response.nextPageToken
    if (nextPageToken) {
      return getVideosFromPlaylist(
        playlistId,
        nextPageToken,
        playlistItems
      ).then((response) => {
        return playlistItems.concat(...response.items)
      })
    } else {
      return playlistItems
    }
  })
}

export const youtubeService = { getAllVideos }
