<template>
  <v-container fluid class="pa-8">
    <v-row justify="center">
      <v-col
        v-for="(topic, index) in topics"
        :key="index"
        cols="6"
        sm="4"
        md="2"
      >
        <nuxt-link :to="`/topic/${topic.name}`">
          <v-card color="primary">
            <v-img :src="formatImagePath(topic.image)" />
            <v-card-title class="title font-weight-light white--text">{{
              topic.name
            }}</v-card-title>
          </v-card>
        </nuxt-link>
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
