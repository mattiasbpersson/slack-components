<template>
  <v-toolbar app>
    <v-toolbar-side-icon v-on:click="$emit('toggle-drawer')"></v-toolbar-side-icon>
    <v-toolbar-title>Slackr</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat>Login (placeholder)</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Toolbar'
}
</script>

<style scoped>
</style>
