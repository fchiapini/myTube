<template>
  <v-app>
    <nav-bar />
    <v-content>
      <nuxt />
    </v-content>
    <v-footer color="primary" app>
      <span>Felipe Chiapini &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
  components: {
    NavBar
  },
  head() {
    return {
      titleTemplate: '%s - Curated List of useful content from Youtube',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Where you can find useful content to learn new skills from Youtube'
        }
      ]
    }
  }
}
</script>
