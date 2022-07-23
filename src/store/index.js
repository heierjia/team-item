import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // user:sessionStorage.getItem('user'),
    user: '',
    userInfo: [],
  },
  getters: {
  },
  mutations: {
    userInfo(state, info) {
      state.userInfo = info
    },
    saveUsername(state, payload) {
      state.user = payload
      sessionStorage.setItem('user', payload)
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
