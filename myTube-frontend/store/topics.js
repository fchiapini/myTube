import TopicService from '@/services/TopicService.js'

export const state = () => ({
  topics: [],
  topicVideos: {}
})

export const mutations = {
  SET_TOPICS(state, topics) {
    state.topics = topics
  },
  SET_TOPIC_VIDEOS(state, topicVideos) {
    state.topicVideos = topicVideos
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
  }
}
