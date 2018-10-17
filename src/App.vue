<template>
  <v-app>
    <Toolbar></Toolbar>
    <Drawer></Drawer>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-snackbar
      v-model="snackbarOpen"
      :bottom="true">
      {{message}}
      <v-btn
        flat
        @click="snackbar = false">
        Close
      </v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
import Toolbar from './components/persistent/Toolbar'
import Drawer from './components/persistent/Drawer'
import {eventBus} from './main'

export default {
  name: 'App',
  components: {Drawer, Toolbar},
  data () {
    return {
      snackbarOpen: false,
      message: null
    }
  },
  created () {
    eventBus.$on('error', e => {
      if (e.name && e.message) {
        this.message = `${e.name}: ${e.message}`
      } else {
        this.message = 'An Unknown Error Occurred!'
        console.log(e)
      }
      this.snackbarOpen = true
    })
  }
}
</script>

<style>
</style>
