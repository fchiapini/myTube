import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://us-central1-fir-app-3e66a.cloudfunctions.net/webApi/api',
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
