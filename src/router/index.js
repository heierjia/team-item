import Vue from 'vue'
import VueRouter from 'vue-router'
import Personal from '../views/Personal/Personal.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/personal',
    name: 'home',
    component: Personal,
    // children:[{
    //   path:'info',
    //   component: () => import('../views/Personal/Info.vue'),
    // }]
  },
 {
  path: '/info',
  name: 'info',
  component: () => import('../views/Personal/Info.vue'),
 },
 {
  path: 'avatar',
  name: 'avatar',
  component: () => import('../views/Personal/Avatar.vue'),
 },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
