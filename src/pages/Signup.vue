<template>
  <v-form>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-title class="headline">
          Signup
        </v-card-title>
        <v-card-text>
          <v-text-field
            label="Display Name"
            v-model="displayName.value"
            :rules="displayName.rules"
            autofocus
          />
          <v-text-field
            label="Email"
            v-model="email.value"
            :rules="email.rules"
          />
          <v-text-field
            type="password"
            label="Password"
            v-model="password.value"
            :rules="password.rules"
          ></v-text-field>
          <v-text-field
            type="password"
            label="Confirm Password"
            v-model="confirmPassword.value"
            :rules="confirmPassword.rules"
            @keyup.enter="signup"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="signup" :disabled="!formIsSubmittable">Signup</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-form>
</template>

<script>
import {firebaseApp} from '../firebase'
import {eventBus} from '../main'
import {nonempty, isEmail, isValid, inRange, maxLength} from '../inputValidation'

export default {
  name: 'Signup',
  data () {
    return {
      displayName: {
        value: '',
        rules: [nonempty, inRange(3, 50)]
      },
      email: {
        value: '',
        rules: [nonempty, isEmail, maxLength(100)]
      },
      password: {
        value: '',
        rules: [nonempty, inRange(8, 100)]
      },
      confirmPassword: {
        value: '',
        rules: [value => value === this.password.value || 'Passwords don\'t match']
      }
    }
  },
  computed: {
    formIsSubmittable () {
      return isValid(this.displayName) && isValid(this.email) && isValid(this.password) && isValid(this.confirmPassword)
    }
  },
  methods: {
    signup () {
      if (this.formIsSubmittable) {
        const auth = firebaseApp.auth()
        auth.createUserWithEmailAndPassword(this.email.value, this.password.value)
          .then(() => auth.currentUser.updateProfile({displayName: this.displayName.value})) // photoURL: undefined -> not changed (https://firebase.google.com/docs/reference/js/firebase.User#updateProfile)
          .then(() => {
            this.$router.push('/')
          })
          .catch(error => {
            eventBus.$emit('error', error)
          })
      }
    }
  }
}
</script>

<style scoped>
</style>
