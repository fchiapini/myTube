import TopicService from '@/services/TopicService.js'

export const state = () => ({
  topics: [],
  videos: []
})

export const mutations = {
  SET_TOPICS(state, topics) {
    state.topics = topics
  },
  SET_TOPIC(state, topic) {
    state.topic = topic
  }
}

export const actions = {
  fetchTopics({ commit }) {
    return TopicService.getTopics().then((response) => {
      commit('SET_TOPICS', response.data)
    })
  },
  fetchVideosByTopic({ commit }, topic) {
    return TopicService.getVideosByTopic(topic).then((response) => {
      commit('SET_VIDEOS', response.data)
    })
  }
}
