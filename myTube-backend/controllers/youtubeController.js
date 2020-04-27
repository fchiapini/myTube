import { youtubeService } from '../services/youtubeService.js'
import data from '../topics.json'

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
      subject: subject.title,
      videos: videos
    })
  })
  return videosBySubject
}

const getVideos = async (req, res) => {
  const { topic } = req.params

  const subjects = data.topics.find((tpc) => tpc.name === topic)['subjects']

  let promises = []
  subjects.forEach((subject) => {
    subject.playlistIds.map((playlistId) => {
      promises.push(youtubeService.getVideosFromPlaylist(playlistId, '', []))
    })
  })
  Promise.all(promises).then((playlists) => {
    const videosBySubject = groupVideosBySubject(subjects, playlists)
    res.json(videosBySubject)
  })
}

export const youtubeController = { getVideos }
