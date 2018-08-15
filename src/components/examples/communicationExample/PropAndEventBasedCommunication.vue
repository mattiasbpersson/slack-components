<template>
  <v-card>

    <v-card-title>
      <span class="headline">
        Communication between components (traditional method)
      </span>
    </v-card-title>

    <v-card-text>
      <p>
        This parent component "owns" the shared data: <span class="highlighted">{{text}}</span>
      </p>
      <p>This is passed down to the children as a property and edited via an event emitted from a child.</p>
      <Child1 :text="text" @textChanged="text=$event"></Child1>
      <br/>
      <Child2 :text="text"></Child2>
    </v-card-text>
  </v-card>
</template>

<script>
import Child1 from './Child1'
import Child2 from './Child2'

export default {
  name: 'PropAndEventBasedCommunication',
  components: {Child2, Child1},
  data () {
    return {
      text: 'Hello World!'
    }
  }
}
</script>

<style scoped>
  .highlighted {
    font-weight: bold;
  }
</style>
