// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueFire from 'vuefire'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import {firebaseApp} from './firebase'

export const eventBus = new Vue()

Vue.use(Vuetify)
Vue.use(VueFire)

let appStarted = false

/* Wait for initial firebase authentication (token validation) before creating Vue application */
firebaseApp.auth().onAuthStateChanged(function (user) {
  if (!appStarted) {
    /* eslint-disable no-new */
    new Vue({
      el: '#app',
      components: {App},
      template: '<App/>',
      data: {user},
      router
    })
    appStarted = true
  }
})
