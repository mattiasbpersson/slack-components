<template>
  <v-toolbar app>
    <v-toolbar-side-icon v-on:click="toggleDrawer"></v-toolbar-side-icon>
    <v-toolbar-title>Slackr</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat>Login (placeholder)</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import {eventBus} from '../../main'
export default {
  name: 'Toolbar',
  methods: {
    toggleDrawer () {
      eventBus.$emit('toggle-drawer')
    }
  }
}
</script>

<style scoped>
</style>
