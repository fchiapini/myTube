import TopicService from '@/services/TopicService.js'

export const actions = {
  async nuxtServerInit({ dispatch }, { req }) {
    await TopicService.getTopics().then((response) => {
      dispatch('topics/fetchTopics', response.data)
    })
  }
}
