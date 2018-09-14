<template>
  <v-navigation-drawer app temporary v-model="isOpen">
    <v-list class="pt-0" dense>
      <v-list-tile @click="showFireBaseExamples()">
        <v-list-tile-content>
          <v-list-tile-title>Firebase examples</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="showTextMessageFeed()">
        <v-list-tile-action>
          <v-icon>create</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>text message</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="showPollFeed()">
        <v-list-tile-action>
          <v-icon>poll</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>poll</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import {eventBus} from '../../main'

export default {

  name: 'Drawer',

  data () {
    return {isOpen: false}
  },

  created () {
    eventBus.$on('toggle-drawer', () => {
      this.isOpen = !this.isOpen
    })
  },

  methods: {
    showTextMessageFeed () {
      this.navigateToRoute('TextMessages')
    },
    showFireBaseExamples () {
      this.navigateToRoute('Firebase')
    },
    showPollFeed () {
      this.navigateToRoute('Polls')
    },
    navigateToRoute (name) {
      this.isOpen = false
      this.$router.push({name})
    }
  }
}
</script>

<style scoped>

</style>
