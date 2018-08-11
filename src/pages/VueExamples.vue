<template>
  <v-flex xs12 sm6 offset-sm3>
    <v-card>

      <v-card-title class="headline">{{ headline }}</v-card-title>

      <v-card-text>

        <VIf></VIf>
        <br/>

        <VFor></VFor>
        <br/>

        <VBind></VBind>
        <br/>

        <PropAndEventBasedCommunication></PropAndEventBasedCommunication>
        <br/>

        <EventBusBasedCommunication/>

      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
import VIf from '../components/examples/VIf'
import VFor from '../components/examples/VFor'
import VBind from '../components/examples/v-bindExample/VBind'
import PropAndEventBasedCommunication from '../components/examples/communicationExample/PropAndEventBasedCommunication'
import EventBusBasedCommunication from '../components/examples/eventBusExample/EventBusBasedCommunication'

export default {
  name: 'VueExamples',
  components: {EventBusBasedCommunication, PropAndEventBasedCommunication, VBind, VFor, VIf},
  data () {
    return {
      headline: 'Some Vue.js examples'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
