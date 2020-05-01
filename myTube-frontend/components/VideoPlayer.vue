<template>
  <v-dialog
    v-model="show"
    :fullscreen="$vuetify.breakpoint.xsOnly"
    width="800"
    height="600"
    @click:outside="close()"
  >
    <v-card outlined>
      <v-card-title class="body-1">
        {{ video.snippet.title }}
        <v-spacer />
        <v-btn text @click="close()"><v-icon>mdi-close</v-icon></v-btn>
      </v-card-title>
      <iframe
        id="ytplayer"
        type="text/html"
        :width="iframeWidth"
        :height="iframeHeigth"
        :src="videoPath(video.contentDetails.videoId)"
        frameborder="0"
        allowFullScreen="true"
      ></iframe>
      <v-card-subtitle class="white--text">
        {{ video.snippet.description }}
      </v-card-subtitle>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    video: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      dialog: false,
      player: null
    }
  },

  computed: {
    iframeHeigth() {
      return this.$vuetify.breakpoint.name === 'xs' ? 360 : 480
    },

    iframeWidth() {
      let width = 0
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          width = 370
          break
        case 'sm':
          width = 768
          break
        default:
          width = 800
      }
      return width
    }
  },

  methods: {
    close() {
      this.$store.dispatch('topics/showVideoPlayerDialog', false)
    },

    videoPath(videoId) {
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`
    }
  }
}
</script>
