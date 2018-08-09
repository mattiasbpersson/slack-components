<template>
  <v-flex xs12 sm6 offset-sm3>
    <v-card>
      <v-card-text>

        <p>{{ msg }}</p>

        <VIf></VIf>
        <br/>

        <VFor></VFor>
        <br/>

        <VBind></VBind>
        <br/>

        <Parent></Parent>

      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
import VIf from '../components/examples/VIf'
import VFor from '../components/examples/VFor'
import VBind from '../components/examples/v-bindExample/VBind'
import Parent from '../components/examples/communicationExample/Parent'

export default {
  name: 'HelloWorld',
  components: {Parent, VBind, VFor, VIf},
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
