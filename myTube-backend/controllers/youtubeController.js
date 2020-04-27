import { youtubeService } from '../services/youtubeService.js'

const getTopicVideos = async (req, res) => {
  const { topic } = req.params
  const topicVideos = await youtubeService.getVideos(topic)
  res.json(topicVideos)
}

export const youtubeController = { getTopicVideos }
