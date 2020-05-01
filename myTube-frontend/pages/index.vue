<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col class="pa-8" cols="12" md="4">
        <p class="title">A curated Youtube playlists to learn new skills</p>
      </v-col>
    </v-row>
    <v-row justify="space-between">
      <v-col
        v-for="(topic, index) in topics"
        :key="index"
        cols="6"
        sm="4"
        md="2"
        tile
        flat
      >
        <v-card
          max-width="200"
          class="mx-auto"
          color="#121212"
          link
          nuxt
          :to="`/topic/${topic.name}`"
        >
          <v-img height="156" width="156" :src="formatImagePath(topic.image)" />
          <v-card-title
            class="pt-2 pl-0 body-1 font-weight-light white--text"
            >{{ topic.name }}</v-card-title
          >
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState({
    topics: (state) => state.topics.topics
  }),

  created() {
    this.$store.dispatch('topics/clearTopicVideos')
  },

  methods: {
    formatImagePath(img) {
      return require(`~/assets/${img}`)
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
</style>
