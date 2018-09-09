<template>
  <v-card>

    <v-card-text class="message-composer-text">
      <v-form ref="form">
      <v-textarea
        label="Message"
        v-model="message.value"
        :rules="message.rules"
        autofocus
        box
        rows="1"
        auto-grow
        background-color="white"
      />
      </v-form>
    </v-card-text>

    <v-card-actions class="message-composer-actions">
      <v-btn :disabled="!messageCanBeSent" @click="sendClicked">Send</v-btn>
    </v-card-actions>

  </v-card>
</template>

<script>
import {isValid, maxLength, nonempty} from '../../inputValidation'

export default {
  name: 'TextMessageComposer',
  data () {
    const maxMessageLength = 1000
    return {
      message: {value: '', maxLength: maxMessageLength, rules: [nonempty, maxLength(maxMessageLength)]}
    }
  },
  computed: {
    messageCanBeSent () {
      return isValid(this.message)
    }
  },
  methods: {
    sendClicked () {
      if (this.messageCanBeSent) {
        this.$emit('send', this.message.value)
        this.$refs.form.reset()
      }
    }
  }
}
</script>

<style scoped>
  .message-composer-text {
    padding-bottom: 0;
  }

  .message-composer-actions {
    padding-top: 0;
  }
</style>
