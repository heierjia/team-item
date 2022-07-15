import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
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
    path: "/test",
    name: "routeName",
    component: () => import("../views/Test.vue"),
  },
  {
    path: "/logina",
    name: "登录",
    component: () => import("../views/LoginA.vue"),
  },
  {
    path: "/registera",
    name: "注册 测试",
    component: () => import("../views/RegisterA.vue"),
  },
  {
    path: "/message",
    name: "消息",
    component: () => import("../views/Message.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
