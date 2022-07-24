import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // user: localStorage.getItem('user'),
    user: '',
    userInfo: [],
  },
  getters: {
  },
  mutations: {
    useDetails(state, info) {
      state.userInfo = info
      // console.log('全局变量info', info);
    },
    saveUsername(state, payload) {
      state.user = payload
      localStorage.setItem('user', payload)
      // console.log('全局变量user', payload);
    },
    onRefresh() {
      setTimeout(() => {
        Toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 1000);
    },

  },
  actions: {
  },
  modules: {
  }
})
