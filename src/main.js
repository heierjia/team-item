import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//引入vant
import Vant from "vant";
import "../node_modules/vant/lib/index.css";
Vue.use(Vant);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
