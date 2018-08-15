<template>
  <v-card>

    <v-card-title class="headline">
        Communication between components (using an event bus)
    </v-card-title>

    <v-card-text>
      <p>Children publish updates to the event bus.</p>
      <Child1/>
      <br/>
      <Child2/>
    </v-card-text>
  </v-card>
</template>

<script>
import Child1 from './Child1'
import Child2 from './Child2'

export default {
  name: 'EventBusBasedCommunication',
  components: {Child2, Child1}
}
</script>

<style scoped>
</style>
