<template>
  <v-card>
    <v-card-title>
      <span class="headline">
        Child 2
      </span>
    </v-card-title>

    <v-card-actions>

      <v-text-field
        label="Write something..."
        :value="text"
        @input="textChanged($event)"
      ></v-text-field>
    </v-card-actions>
  </v-card>
</template>

<script>
import {eventBus} from '../../../main'
export default {
  name: 'Child2',
  data () {
    return {
      text: ''
    }
  },
  methods: {
    textChanged (event) {
      eventBus.$emit('textChanged', event)
    }
  },
  created () {
    eventBus.$on('textChanged', updatedText => {
      this.text = updatedText
    })
  }
}
</script>

<style scoped>
</style>
