<template>
  <div>Videos</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  async fetch({ store, error, params }) {
    try {
      await store.dispatch('topics/fetchVideosByTopic', params.topic)
    } catch (e) {
      error({
        statusCode: 503,
        message: `Unable to fetch videos from topic # ${params.topic}.`
      })
    }
  },

  computed: mapState({
    videos: (state) => state.topics.videos
  })
}
</script>

<style lang="scss" scoped></style>
