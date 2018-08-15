<template>
  <v-navigation-drawer app temporary v-model="isOpen">
    <v-list class="pt-0" dense>

      <v-list-tile @click="createTextMessage()">
        <v-list-tile-action>
          <v-icon>'create'</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>text message</v-list-tile-title>
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
    createTextMessage () {
      // TODO navigate to text message creator
      console.log('Create text message')
      this.isOpen = false
    }
  }
}
</script>

<style scoped>

</style>
