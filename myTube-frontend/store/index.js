export const actions = {
  async nuxtServerInit({ dispatch, error }, { req }) {
    try {
      await dispatch('topics/fetchTopics')
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch videos at this time. Please try again.'
      })
    }
  }
}
