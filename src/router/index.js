import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Question1 from '../views/Question1.vue'
import Question2 from '../views/Question2.vue'
import Interest from '../views/Interest.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/Question1',
    name: 'Question1',
    component: Question1
  },
  {
    path: '/Question2',
    name: 'Question2',
    component: Question2
  },
  {
    path: '/Interest',
    name: 'Interest',
    component: Interest
  },
  


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
