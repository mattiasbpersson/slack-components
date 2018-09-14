import Vue from 'vue'
import Router from 'vue-router'
import VueExamples from '../pages/VueExamples'
import TextMessages from '../pages/TextMessages'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import UserInfo from '../pages/UserInfo'
import FirebaseExamples from '../pages/FirebaseExamples'
import {firebaseApp} from '../firebase'
import {currentUser} from '../main'

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
      path: '/textMessages',
      name: 'TextMessages',
      component: TextMessages,
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
  let requiresAuth = to.matched.some(routeRecord => routeRecord.meta.requiresAuth)

  if (requiresAuth && !currentUser) {
    next('login')
  } else {
    next()
  }
})

firebaseApp.auth().onAuthStateChanged((user) => {
  let requiresAuth = router.currentRoute.matched.some(routeRecord => routeRecord.meta.requiresAuth)
  if (!user && requiresAuth) {
    router.push('/')
  }
})

export default router
