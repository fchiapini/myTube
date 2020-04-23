import { youtubeService } from '../services/youtubeService.js'

const PLAYLIST_IDS_BY_TOPIC = {
  JAPANESE: [
    'PLPSfPyOOcp3SxDZf7gkbApq_PrJsGf7Pn',
    'PLPSfPyOOcp3Q8DNjJvUzMFcgM0tZ_0a87',
    'PLag_mhJfCJ-18WyYoklCPxIpYbeRgmWLJ'
  ],
  'BRAZILIAN PORTUGUESE': ['PLlsxoL4OXm7XLqAQY_Q-_hCB6EZ8AUpjg'],
  ENGLISH: ['PLfQSN9FlyB6Rm4xMKTyahH3oUOgF0tU4T']
}

const getVideos = async (req, res) => {
  const { topic } = req.params

  const playlistIds = PLAYLIST_IDS_BY_TOPIC[topic]
  let promises = []
  playlistIds.forEach((playlistId) => {
    promises.push(youtubeService.getVideosFromPlaylist(playlistId, '', []))
  })
  Promise.all(promises).then((responses) => {
    const videos = [].concat.apply([], responses)
    res.json(videos)
  })
}

export const youtubeController = { getVideos }
