<template>
  <v-flex xs12 sm6 offset-sm3>
    <v-card>
      <v-card-text>
        <p>{{ msg }}</p>
        <VIf></VIf>
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
import VIf from './VIf'
export default {
  name: 'HelloWorld',
  components: {VIf},
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
