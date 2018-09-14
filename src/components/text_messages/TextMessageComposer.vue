<template>
  <v-card>

    <v-card-text class="message-composer-text">
      <v-textarea
        label="Message"
        v-model="message.value"
        :rules="[message.rules[1]]"
        :counter="message.maxLength"
        autofocus
        box
        background-color="white"
        @keyup.ctrl.enter="sendMessage"
      />
    </v-card-text>

    <v-card-actions class="message-composer-actions">
      <v-btn :disabled="!messageCanBeSent" @click="sendMessage">Send</v-btn>
      <v-spacer/>
      <v-icon v-if="icon" @click="iconClicked">{{icon}}</v-icon>
    </v-card-actions>

  </v-card>
</template>

<script>
import {isValid, maxLength, nonempty} from '../../inputValidation'

export default {
  name: 'TextMessageComposer',
  props: {
    icon: String
  },
  data () {
    const maxMessageLength = 1000
    return {
      message: {
        value: '',
        maxLength: maxMessageLength,
        rules: [nonempty, maxLength(maxMessageLength)]
      }
    }
  },
  computed: {
    messageCanBeSent () {
      return isValid(this.message)
    }
  },
  methods: {
    sendMessage () {
      if (this.messageCanBeSent) {
        this.$emit('send', this.message.value)
        this.message.value = ''
      }
    },
    iconClicked () {
      this.$emit('iconClicked')
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
