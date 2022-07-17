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
  path: '/avatar',
  name: 'avatar',
  component: () => import('../views/Personal/Avatar.vue'),
 },
 {
  path: "/login",
  name: "登录",
  component: () => import("../views/Login.vue"),
},
{
  path: "/register",
  name: "注册",
  component: () => import("../views/Register.vue"),
},
{
  path: '/message',
  name: 'message',
  component: () => import('../views/Personal/Message.vue'),
},
{
  path: '/systeminforms',
  name: 'systeminforms',
  component: () => import('../views/Personal/Message/SystemInforms.vue'),
},
{
  path: '/setup',
  name: 'setup',
  component: () => import('../views/Personal/Setup.vue'),
},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
