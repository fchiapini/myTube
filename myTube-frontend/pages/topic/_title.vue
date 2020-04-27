<template>
  <v-container>
    <v-row v-for="(subject, index) in topicVideos.videosBySubject" :key="index">
      <v-col>
        <v-row>
          <v-col>
            <p class="text-capitalize">{{ subject.title }}</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-slide-group mandatory show-arrows>
              <v-slide-item v-for="(video, i) in subject.videos" :key="i">
                <v-card v-if="video.snippet.thumbnails" class="ma-2 pa-4">
                  <v-img
                    height="180"
                    width="320"
                    :src="video.snippet.thumbnails.medium.url"
                    alt="Video thumbnail"
                  >
                  </v-img>
                  <v-card-subtitle class="text-break" style="max-width: 20rem">
                    {{ video.snippet.title }}
                  </v-card-subtitle>
                </v-card>
              </v-slide-item>
            </v-slide-group>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  async fetch({ store, error, params }) {
    try {
      await store.dispatch('topics/fetchTopicVideos', params.title)
    } catch (e) {
      error({
        statusCode: 503,
        message: `Unable to fetch videos from topic # ${params.title}.`
      })
    }
  },

  computed: mapState({
    topicVideos: (state) => state.topics.topicVideos
  })
}
</script>

<style lang="scss" scoped></style>
