import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios';
import Vant from 'vant';
import 'vant/lib/index.css';
import moment from 'moment'
Vue.prototype.moment = moment
axios.defaults.baseURL = 'http://127.0.0.1:3000/v2/user'
Vue.use(VueAxios, axios)
Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
