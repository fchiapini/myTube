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
      return this.getIframeHeightByScreenSize()
    },

    iframeWidth() {
      return this.getIframeWidthByScreenSize()
    }
  },

  methods: {
    close() {
      this.$store.dispatch('topics/showVideoPlayerDialog', false)
    },

    videoPath(videoId) {
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`
    },

    getIframeHeightByScreenSize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 360
        case 'sm':
          return 480
        case 'md':
          return 600
        case 'lg':
          return 480
        case 'xl':
          return 480
      }
    },

    getIframeWidthByScreenSize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 370
        case 'sm':
          return 768
        case 'md':
          return 799
        case 'lg':
          return 799
        case 'xl':
          return 799
      }
    }
  }
}
</script>
