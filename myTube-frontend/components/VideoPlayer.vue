<template>
  <v-dialog v-model="show" max-width="800">
    <v-card>
      <v-card-title> {{ video.snippet.title }} </v-card-title>
      <youtube
        player-width="800"
        player-height="600"
        :video-id="video.contentDetails.videoId"
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
  }
}
</script>

<style lang="scss" scoped></style>
