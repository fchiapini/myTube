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
  }
}

export const actions = {
  fetchTopics({ commit }) {
    return TopicService.getTopics().then((response) => {
      commit('SET_TOPICS', response.data)
    })
  },
  fetchTopicVideos({ commit }, topic) {
    return TopicService.getVideosByTopic(topic).then((response) => {
      commit('SET_TOPIC_VIDEOS', response.data)
    })
  },
  showVideoPlayerDialog({ commit }, show) {
    commit('SET_VIDEO_PLAYER_DIALOG', show)
  }
}
