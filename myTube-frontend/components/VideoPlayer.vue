<template>
  <v-dialog v-model="show" width="800" height="600" @click:outside="close()">
    <v-card>
      <v-card-title>
        {{ video.snippet.title }}
        <v-spacer />
        <v-btn text @click="close()"><v-icon>mdi-close</v-icon></v-btn>
      </v-card-title>
      <youtube
        player-width="800"
        player-height="600"
        :video-id="video.contentDetails.videoId"
        @ready="ready"
      ></youtube>
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

  methods: {
    ready(event) {
      this.player = event.target
    },

    stop() {
      this.player.stopVideo()
    },

    close() {
      this.$store.dispatch('topics/showVideoPlayerDialog', false)
      this.stop()
    }
  }
}
</script>

<style lang="scss" scoped></style>
