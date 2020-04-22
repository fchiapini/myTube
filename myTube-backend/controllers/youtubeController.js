import { youtubeService } from '../services/youtubeService.js'

const PLAYLIST_IDS_BY_LANGUAGE = {
  JAPANESE: [
    'PLPSfPyOOcp3SxDZf7gkbApq_PrJsGf7Pn',
    'PLPSfPyOOcp3Q8DNjJvUzMFcgM0tZ_0a87',
    'PLag_mhJfCJ-18WyYoklCPxIpYbeRgmWLJ'
  ],
  'BRAZILIAN PORTUGUESE': ['PLlsxoL4OXm7XLqAQY_Q-_hCB6EZ8AUpjg'],
  ENGLISH: ['PLfQSN9FlyB6Rm4xMKTyahH3oUOgF0tU4T']
}

const getVideos = async (req, res) => {
  try {
    const { topic } = req.params
    const videos = await youtubeService.getAllVideos(topic)
    res.json(videos)
  } catch (error) {
    res.sendStatus(500, error)
  }
}

export const youtubeController = { getVideos }
