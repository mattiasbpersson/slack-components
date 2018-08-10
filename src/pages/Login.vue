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
          <v-btn @click="login" :disabled="!formIsSubmittable">Login</v-btn>
          <router-link to="Signup">Signup?</router-link>
        </v-card-actions>
      </v-card>
    </v-flex>
</template>

<script>
import {firebaseApp} from '../firebase'
import {nonempty, isEmail, isValid} from '../inputValidation'

export default {
  name: 'Signup',
  data () {
    return {
      email: {
        value: '',
        rules: [nonempty, isEmail]
      },
      password: {
        value: '',
        rules: [nonempty]
      }
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
        firebaseApp.auth()
          .signInWithEmailAndPassword(this.email.value, this.password.value)
          .then(user => {
            // Will probably be handled in firebase onAuthStateChanged listener in main.js
            console.log(user)
          })
          .catch(error => console.log(error))
      }
    }
  }
}
</script>

<style scoped>
</style>
