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
                <v-card
                  v-if="video.snippet.thumbnails"
                  color="#121212"
                  class="pa-2"
                  tile
                  flat
                  @click.stop="showVideoPlayer(video)"
                >
                  <v-img
                    height="180"
                    width="320"
                    :src="video.snippet.thumbnails.medium.url"
                    alt="Video thumbnail"
                  >
                  </v-img>
                  <v-card-subtitle
                    class="text-break white--text"
                    style="max-width: 20rem"
                  >
                    {{ video.snippet.title }}
                  </v-card-subtitle>
                </v-card>
              </v-slide-item>
            </v-slide-group>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <template v-if="currentVideo">
      <video-player
        key="video.id"
        :show="showVideoPlayerDialog"
        :video="currentVideo"
      />
    </template>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import VideoPlayer from '@/components/VideoPlayer.vue'
export default {
  components: {
    VideoPlayer
  },

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

  data() {
    return {
      currentVideo: null
    }
  },

  computed: {
    ...mapState({
      topicVideos: (state) => state.topics.topicVideos
    }),
    ...mapState({
      showVideoPlayerDialog: (state) => state.topics.showVideoPlayerDialog
    })
  },

  watch: {
    showVideoPlayerDialog(newValue, oldValue) {
      if (!newValue) {
        this.currentVideo = null
      }
    }
  },

  methods: {
    showVideoPlayer(video) {
      this.currentVideo = video
      this.$store.dispatch('topics/showVideoPlayerDialog', true)
    }
  }
}
</script>

<style lang="scss" scoped></style>
