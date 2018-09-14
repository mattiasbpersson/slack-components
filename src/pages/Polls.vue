<template>
  <div v-if="!loading">
    <v-flex xs12 sm6 offset-sm3>
      <v-card class="polls-container">

        <v-card-title class="headline">
          Polls
        </v-card-title>

        <v-card-text>
          <v-card v-for="poll in polls" v-bind:key="poll['.key']">

            <v-card-title class="polls-header">
              <span class="display-name">{{poll.createdBy.displayName}}</span>
              <span class="polls-time">{{new Date(poll.createdAt).toLocaleString('en-SE')}}</span>
            </v-card-title>

            <v-card-text class="polls-text-wrapper">
              <span class="polls-text">{{poll.title}}</span>
              <ul>
                <li v-for="option in poll.options" :key="option" @click="selectOption(poll,option)">
                  {{option}}
                </li>
              </ul>
            </v-card-text>

          </v-card>
        </v-card-text>
      </v-card>
    </v-flex>

    <v-flex xs12 sm6 offset-sm3
            :class="composerIsSticky ? 'sticky-composer' : ''">
      <v-card>

        <v-card-text class="polls-composer-text">
          <v-text-field label="Title" v-model="poll.title"></v-text-field>
          <v-textarea label="Options" v-model="poll.options"></v-textarea>
        </v-card-text>

        <v-card-actions class="polls-composer-actions">
          <v-btn :disabled="!pollCanBeSaved" @click="savePoll">Save</v-btn>
        </v-card-actions>

      </v-card>

    </v-flex>
  </div>
</template>

<script>
import {polls} from '../firebase'
import {currentUser} from '../main'
import VSwitch from "vuetify/src/components/VSwitch/VSwitch";

export default {
  name: 'Polls',
  components: {VSwitch},
  created () {
    this.$watch('messages', this.scrollToBottom)
  },
  data () {
    return {
      loading: true,
      composerIsSticky: true,
      poll: {
        title: '',
        options: ''
      }
    }
  },
  firebase () {
    return {
      polls: {
        source: polls,
        readyCallback: () => {
          this.loading = false
        }
      }
    }
  },
  computed: {
    pollCanBeSaved () {
      return true
    }
  },
  methods: {
    scrollToBottom () {
      this.$nextTick(() => window.scrollTo(0, document.body.scrollHeight))
    },
    savePoll () {
      polls.push({
        ...this.poll,
        options: this.poll.options.trim().split('\n'),
        createdAt: new Date().toISOString(),
        createdBy: {
          uid: currentUser.uid,
          displayName: currentUser.displayName
        }
      })
    },
    selectOption (poll, option) {
      poll.answers.push({})
    },
  }
}
</script>

<style scoped>

  .polls-container {
    background-color: #F0F0F0;
    margin-bottom: 1rem;
  }
   .polls-composer-text {
     padding-bottom: 0;
   }

  .polls-composer-actions {
    padding-top: 0;
  }

</style>
