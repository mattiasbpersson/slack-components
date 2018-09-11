<template>
  <v-flex xs12 sm6 offset-sm3>
    <v-card>
      <v-card-title class="headline">
        Login
      </v-card-title>
      <v-card-text>
        <v-text-field
          label="Email"
          v-model="email.value"
          :rules="email.rules"
          autofocus
        />
        <v-text-field
          type="password"
          label="Password"
          v-model="password.value"
          :rules="password.rules"
          @keyup.enter="login"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="login" :disabled="isLoggingIn || !formIsSubmittable">Login</v-btn>
        <router-link to="Signup">Signup?</router-link>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
import {firebaseApp} from '../firebase'
import {eventBus} from '../main'
import {isEmail, isValid, maxLength, nonempty} from '../inputValidation'

export default {
  name: 'Signup',
  data () {
    return {
      email: {
        value: '',
        rules: [nonempty, isEmail, maxLength(100)]
      },
      password: {
        value: '',
        rules: [nonempty, maxLength(100)]
      },
      isLoggingIn: false
    }
  },
  computed: {
    formIsSubmittable () {
      return isValid(this.email) && isValid(this.password)
    }
  },
  methods: {
    login () {
      if (this.formIsSubmittable) {
        this.isLoggingIn = true
        firebaseApp.auth()
          .signInWithEmailAndPassword(this.email.value, this.password.value)
          .then(() => {
            this.$router.push('/')
          })
          .catch(error => {
            eventBus.$emit('error', error)
          })
          .finally(() => {
            this.isLoggingIn = false
          })
      }
    }
  }
}
</script>

<style scoped>
</style>
