import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/HelloWorld.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/personal'
  },
  {
    path: '/personal',
    name: 'home',
    component: () => import('../views/Personal/Personal.vue')
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
    path: '/message',
    name: 'message',
    component: () => import('../views/Personal/Message/Message.vue'),
  },
  {
    path: '/systeminforms',
    name: 'systeminforms',
    component: () => import('../views/Personal/Message/SystemInforms.vue'),
  },
  {
    path: '/transaction',
    name: 'transaction',
    component: () => import('../views/Personal/Message/TransactionNotice.vue'),
  },
  {
    path: '/eventnotif',
    name: 'eventnotif',
    component: () => import('../views/Personal/Message/EventNotification.vue'),
  },
  {
    path: '/setup',
    name: 'setup',
    component: () => import('../views/Personal/setup/Setup.vue'),
  },
  {
    path: '/AccountSecurity',
    name: 'AccountSecurity',
    component: () => import('../views/Personal/setup/AccountSecurity.vue'),
  },
  {
    path: '/NewMessages',
    name: 'NewMessages',
    component: () => import('../views/Personal/setup/NewMessages.vue'),
  },
  {
    path: '/general',
    name: 'general',
    component: () => import('../views/Personal/setup/General.vue'),
  },
  {
    path: '/guany',
    name: 'guany',
    component: () => import('../views/Personal/setup/Guany.vue'),
  },
  {
    path: '/MyDigitalCollection',
    name: 'MyDigitalCollection',
    component: () => import('../views/Personal/MyDigitalCollection.vue'),
  },
  {
    path: '/MyPurse',
    name: 'MyPurse',
    component: () => import('../views/Personal/MyPurse.vue'),
  },
  {
    path: '/OnlineService',
    name: 'OnlineService',
    component: () => import('../views/Personal/OnlineService.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
