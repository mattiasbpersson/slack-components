<template>
  <v-flex xs12 sm6 offset-sm3>
    <v-card>
      <v-card-title>
        <span class="headline">HellowWorld</span>
      </v-card-title>
      <v-card-text>
        <p>{{ msg }}</p>
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
