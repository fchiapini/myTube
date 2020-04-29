<template>
  <nav>
    <v-app-bar color="primary" flat app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <nuxt-link to="/">
        <v-toolbar-title class="title font-weight-bold text-uppercase red--text"
          >Awesome MyTube</v-toolbar-title
        ></nuxt-link
      >
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" color="primary" absolute temporary>
      <v-list-item>
        <v-list-item-content>
          <nuxt-link to="/">
            <v-list-item-title
              class="title font-weight-bold text-uppercase red--text"
              >Awesome MyTube</v-list-item-title
            >
          </nuxt-link>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item-group :value="item">
          <v-list-item
            v-for="(topic, index) in topics"
            :key="index"
            active-class="selected"
          >
            <nuxt-link :to="`/topic/${topic.name}`">
              <v-list-item-content class="body-1 font-weight-light white--text">
                <p class="body-1 font-weight-light white--text">
                  {{ topic.name }}
                </p>
              </v-list-item-content>
            </nuxt-link>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      drawer: null
    }
  },

  computed: {
    ...mapState({
      topics: (state) => state.topics.topics
    }),
    ...mapState({
      topic: (state) => state.topics.topicVideos.topic
    }),
    item() {
      return this.topics.findIndex((element) => element.name === this.topic)
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}

.selected {
  border-left: red solid 0.5em;
}
</style>
