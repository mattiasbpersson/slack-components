<template>
  <div id="app">
    <v-app light>
      <v-content>
        <v-container fluid>
          <router-view class="router" />
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
