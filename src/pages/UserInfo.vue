<template>
  <v-flex xs12 sm6 offset-sm3>
    <v-card>
      <v-card-title class="headline">
        My Account
      </v-card-title>
      <v-card-text>
        <table class="user-info-table" v-if="user">
          <tr>
            <td>Display Name:</td>
            <td>{{user.displayName}}</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>{{user.email}}</td>
          </tr>
        </table>
      </v-card-text>
      <v-card-actions>
        <v-text-field
          type="password"
          label="Password"
          v-model="password"
        />
        <v-btn @click="removeAccount()">Remove Account</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
import Firebase from 'firebase'
import {firebaseApp} from '../firebase'
import {eventBus} from '../main'

export default {
  name: 'UserInfo',
  data () {
    return {
      user: null,
      password: ''
    }
  },
  created () {
    const auth = firebaseApp.auth()
    this.user = auth.currentUser
    auth.onAuthStateChanged(user => {
      this.user = user
    })
  },
  methods: {
    removeAccount () {
      const credential = Firebase.auth.EmailAuthProvider.credential(this.user.email, this.password)
      this.user.reauthenticateAndRetrieveDataWithCredential(credential)
        .then(() => this.user.delete())
        .then(() => this.$router.push('/'))
        .catch(e => eventBus.$emit('error', e))
    }
  }
}
</script>

<style scoped>

  .user-info-table {
    font-size: medium;
    border-spacing: 0.5em;
  }

  .user-info-table tr :first-child {
    text-align: right;
    font-weight: bold;
  }

</style>
