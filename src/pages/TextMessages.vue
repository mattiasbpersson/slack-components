<template>
  <v-form v-model="valid">
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-title class="headline">
          Text Message
        </v-card-title>
        <v-card-text>
          <v-textarea
            label="Message"
            v-model="message.value"
            :rules="message.rules"
            autofocus
            :counter="message.maxLength"
          />
        </v-card-text>
        <v-card-actions>
          <v-btn @click="send" :disabled="!valid">Send</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-form>
</template>

<script>
import {nonempty, maxLength} from '../inputValidation'

export default {
  name: 'TextMessages',
  data () {
    const maxMessageLength = 1000
    return {
      message: {value: '', maxLength: maxMessageLength, rules: [nonempty, maxLength(maxMessageLength)]},
      valid: false
    }
  },
  methods: {
    send () {
      // TODO upload message
    }
  }
}
</script>

<style scoped>

</style>
