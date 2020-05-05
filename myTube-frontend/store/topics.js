import TopicService from '@/services/TopicService.js'

export const state = () => ({
  topics: [],
  topicVideos: {},
  showVideoPlayerDialog: false
})

export const mutations = {
  SET_TOPICS(state, topics) {
    state.topics = topics
  },
  SET_TOPIC_VIDEOS(state, topicVideos) {
    state.topicVideos = topicVideos
  },
  SET_VIDEO_PLAYER_DIALOG(state, show) {
    state.showVideoPlayerDialog = show
  },
  CLEAR_TOPIC_VIDEOS(state) {
    state.topicVideos = {}
  }
}

export const actions = {
  async fetchTopics({ commit }) {
    const topics = await TopicService.getTopics()
    commit('SET_TOPICS', topics)
  },
  async fetchTopicVideos({ commit }, topic) {
    const videos = await TopicService.getVideosByTopic(topic)
    commit('SET_TOPIC_VIDEOS', videos)
  },
  showVideoPlayerDialog({ commit }, show) {
    commit('SET_VIDEO_PLAYER_DIALOG', show)
  },
  clearTopicVideos({ commit }) {
    commit('CLEAR_TOPIC_VIDEOS')
  }
}
