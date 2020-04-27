<template>
  <nav>
    <v-app-bar flat app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Awesome MyTube</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Awesome MyTube</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="(topic, index) in topics" :key="index" link>
          <nuxt-link :to="`/topic/${topic.name}`">
            <v-list-item-content>
              <v-list-item-title>{{ topic.name }}</v-list-item-title>
            </v-list-item-content>
          </nuxt-link>
        </v-list-item>
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

  computed: mapState({
    topics: (state) => state.topics.topics
  })
}
</script>

<style lang="scss" scoped></style>
