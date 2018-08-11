<template>
  <v-toolbar app>
    <v-toolbar-side-icon v-on:click="toggleDrawer"></v-toolbar-side-icon>
    <v-toolbar-title class="clickable" @click="home">Slackr</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat  @click="login">Login</v-btn>
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
    },
    login () {
      this.$router.push({name: 'Login'})
    },
    home () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
  .clickable {
    cursor: pointer;
  }
</style>
