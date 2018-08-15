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
import {minLength, nonempty, isEmail, isValid} from '../inputValidation'

export default {
  name: 'Signup',
  data () {
    return {
      displayName: {
        value: '',
        rules: [nonempty, minLength(3)]
      },
      email: {
        value: '',
        rules: [nonempty, isEmail]
      },
      password: {
        value: '',
        rules: [nonempty, minLength(8)]
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
      firebaseApp.auth()
        .createUserWithEmailAndPassword(this.email.value, this.password.value)
        .then(user => {
          // TODO save user info in rtdb so we can get, for example, the displayName from the email
          console.log(user)
        })
        .catch(error => console.log(error))
    }
  }
}
</script>

<style scoped>
</style>
