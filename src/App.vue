<template>
  <v-app>
    <Toolbar></Toolbar>
    <Drawer></Drawer>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app></v-footer>
  </v-app>
</template>

<script>
import Toolbar from './components/persistent/Toolbar'
import Drawer from './components/persistent/Drawer'

export default {
  name: 'App',
  components: {Drawer, Toolbar}
}
</script>

<style>
</style>
