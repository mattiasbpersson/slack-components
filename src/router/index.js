import Vue from 'vue'
import Router from 'vue-router'
import VueExamples from '../pages/VueExamples'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import UserInfo from '../pages/UserInfo'
import FirebaseExamples from '../pages/FirebaseExamples'
import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'VueExamples',
      component: VueExamples,
      meta: {requiresAuth: false}
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup,
      meta: {requiresAuth: false}
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {requiresAuth: false}
    },
    {
      path: '/user',
      name: 'UserInfo',
      component: UserInfo,
      meta: {requiresAuth: true}
    },
    {
      path: '/firebase',
      name: 'Firebase',
      component: FirebaseExamples,
      meta: {requiresAuth: true}
    }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser

  let requiresAuth = to.matched.some(routeRecord => routeRecord.meta.requiresAuth)

  if (requiresAuth && !currentUser) {
    next('login')
  } else {
    next()
  }
})

export default router
