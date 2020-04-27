import axios from 'axios'

const apiClient = axios.create({
  baseURL: process.env.BASE_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getTopics() {
    return apiClient.get('/topics')
  },

  getVideosByTopic(topic) {
    return apiClient.get(`/videos/${topic}`)
  }
}
