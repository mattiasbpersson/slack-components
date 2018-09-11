<template>
  <div v-if="!loading">
    <v-flex xs12 sm6 offset-sm3>
      <v-card class="messages-container">

        <v-card-title class="headline">
          Text Messages
        </v-card-title>

        <v-card-text>

          <TextMessageViewer
            class="message-viewer"
            v-for="(message, key) in messages"
            :message="message"
            :key="key"
          />

        </v-card-text>
      </v-card>
    </v-flex>

    <v-flex xs12 sm6 offset-sm3
            :class="composerIsSticky ? 'sticky-composer' : ''">
      <TextMessageComposer
        :icon="composerIsSticky ? 'arrow_drop_down' : 'arrow_drop_up'"
        @send="send"
        @iconClicked="composerIsSticky = !composerIsSticky"
      />
    </v-flex>
  </div>
</template>

<script>
import {textMessages} from '../firebase'
import {currentUser} from '../main'
import TextMessageComposer from '../components/text_messages/TextMessageComposer'
import TextMessageViewer from '../components/text_messages/TextMessageViewer'

export default {
  name: 'TextMessages',
  components: {TextMessageViewer, TextMessageComposer},
  created () {
    this.$watch('messages', this.scrollToBottom)
  },
  data () {
    return {
      loading: true,
      composerIsSticky: true
    }
  },
  firebase () {
    return {
      messages: {
        source: textMessages,
        readyCallback: () => {
          this.loading = false
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
      })
    }
  }
}
</script>

<style scoped>

  .messages-container {
    background-color: #F0F0F0;
    margin-bottom: 1rem;
  }

  .message-viewer {
    margin-bottom: 1rem;
  }

  .sticky-composer {
    position: sticky;
    bottom: 1rem;
  }
</style>
