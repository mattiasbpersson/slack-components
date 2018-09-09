<template>
  <div v-if="!loading">
    <v-flex xs12 sm6 offset-sm3>
      <v-card class="messages-container">

        <v-card-title class="headline">
          Text Messages
        </v-card-title>

        <v-card-text>

          <template v-for="(message, key) in messages">
            <v-card class="message" :key="key">

              <v-card-title class="message-header">
                <span class="display-name">{{message.createdBy.displayName}}</span>
                <span class="message-time">{{new Date(message.createdAt).toLocaleString('en-SE')}}</span>
              </v-card-title>

              <v-card-text class="message-text">
                <span class="message-text-content">{{message.text}}</span>
              </v-card-text>

            </v-card>
          </template>

        </v-card-text>
      </v-card>
    </v-flex>

    <v-flex xs12 sm6 offset-sm3 class="message-composer">
      <TextMessageComposer
        @send="send"
      />
    </v-flex>
  </div>
</template>

<script>
import {textMessages} from '../firebase'
import {currentUser} from '../main'
import TextMessageComposer from '../components/text_messages/TextMessageComposer'

export default {
  name: 'TextMessages',
  components: {TextMessageComposer},
  data () {
    return {
      loading: true
    }
  },
  firebase () {
    return {
      messages: {
        source: textMessages,
        readyCallback: () => {
          this.loading = false
          this.scrollToBottom()
        }
      }
    }
  },
  methods: {
    scrollToBottom () {
      this.$nextTick(() => window.scrollTo(0, document.body.scrollHeight))
    },
    send (message) {
      textMessages.push({
        createdAt: new Date().toISOString(),
        createdBy: {
          uid: currentUser.uid,
          displayName: currentUser.displayName
        },
        text: message
      }, () => this.scrollToBottom())
    }
  }
}
</script>

<style scoped>

  .messages-container {
    background-color: #F0F0F0;
    margin-bottom: 1rem;
  }

  .message {
    margin-bottom: 1rem;
  }

  .display-name {
    font-weight: bold;
  }

  .message-time {
    margin-left: 1rem;
    opacity: 0.5;
  }

  .message-header {
    padding-bottom: 0;
  }

  .message-text {
    padding-top: 0;
  }

  .message-text-content {
    white-space: pre;
  }

  .message-composer {
    position: sticky;
    bottom: 1rem;
  }
</style>
