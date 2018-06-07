// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueFire from 'vuefire'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { firebaseApp } from '@/firebase'

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(VueFire)

let app

firebaseApp.auth().onAuthStateChanged(function (user) {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      components: { App },
      template: '<App/>',
      router
    })
  }
})
