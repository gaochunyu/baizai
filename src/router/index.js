import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/views/HomePage'
import LoginPage from '@/views/LoginPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/',
      name: 'LoginPage',
      component: LoginPage
    }
  ]
})
