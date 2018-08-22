<template>
  <v-toolbar app>
    <v-toolbar-side-icon v-on:click="toggleDrawer"></v-toolbar-side-icon>
    <v-toolbar-title class="clickable" @click="home">:SlackComponents🔥</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-icon class="clickable" v-if="user" @click="$router.push({name: 'UserInfo'})">account_box</v-icon>
      <v-btn v-if="user" flat @click="logout">Logout</v-btn>
      <v-btn v-else flat @click="login">Login</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import {eventBus} from '../../main'
import {firebaseApp} from '../../firebase'

export default {
  name: 'Toolbar',
  data () {
    return {user: null}
  },
  methods: {
    toggleDrawer () {
      eventBus.$emit('toggle-drawer')
    },
    login () {
      this.$router.push({name: 'Login'})
    },
    logout () {
      firebaseApp.auth()
        .signOut()
        .catch(error => { eventBus.$emit('error', error) })
    },
    home () {
      this.$router.push('/')
    }
  },
  created () {
    const auth = firebaseApp.auth()
    this.user = auth.currentUser
    auth.onAuthStateChanged(user => {
      this.user = user
    })
  }
}
</script>

<style scoped>
  .clickable {
    cursor: pointer;
  }
</style>
