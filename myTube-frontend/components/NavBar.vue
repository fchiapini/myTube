<template>
  <nav>
    <v-app-bar flat app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Awesome Youtube</v-toolbar-title>
    </v-app-bar>

    <v-sheet height="1000" class="overflow-hidden" style="position: relative;">
      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Awesome Youtube</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>
          <v-list-item v-for="(topic, index) in topics" :key="index" link>
            <v-list-item-content>
              <v-list-item-title>{{ topic }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-sheet>
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
