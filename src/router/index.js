import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../pages/VueExamples'
import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {requiresAuth: false}
    }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser

  if (currentUser != null) {
    currentUser.providerData.forEach(function (profile) {
      console.log('Sign-in provider: ' + profile.providerId)
      console.log('  Provider-specific UID: ' + profile.uid)
      console.log('  Name: ' + profile.displayName)
      console.log('  Email: ' + profile.email)
      console.log('  Photo URL: ' + profile.photoURL)
    })
  }

  let requiresAuth = to.matched.some(routeRecord => routeRecord.meta.requiresAuth)

  if (requiresAuth && !currentUser) {
    // TODO login page!
    next('login')
  } else {
    next()
  }
})

export default router
