import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import name from '../views/name.vue'
import main from '../views/main.vue'
import bmi from '../views/bmi.vue'
import grade from '../views/grade.vue'

Vue.use(VueRouter)

const routes = [
  { 
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/main',
    name: 'main',
    component: main
  },
  {
    path: '/name',
    name: 'name',
    component: name
  },
  {
    path: '/bmi',
    name: 'bmi',
    component: bmi
  },
  {
    path: '/grade',
    name: 'grade',
    component: grade
  },
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
  
})

export default router
