import { youtubeService } from '../services/youtubeService.js'
import topics from '../topics.json'

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
