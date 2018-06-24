<template>
  <v-app>
    <Toolbar v-on:toggle-drawer="drawerOpen = !drawerOpen"></Toolbar>
    <Drawer v-model="drawerOpen"></Drawer>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app></v-footer>
  </v-app>
</template>

<script>
import Toolbar from './components/Toolbar'
import Drawer from './components/Drawer'

export default {
  name: 'App',
  components: {Drawer, Toolbar},
  data () {
    return {
      drawerOpen: false
    }
  }
}
</script>

<style>
</style>
