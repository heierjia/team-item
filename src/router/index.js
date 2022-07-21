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
