import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // user:sessionStorage.getItem('user'),
    user:'yaya',
    userInfo:[],
    // sex:'女',
    // phone:13333333333,
    // email:'123@qq.com',
  },
  getters: {
  },
  mutations: {
    userInfo(state,info){
      state.userInfo = info
    },
    saveUsername(state,payload){
      state.user = payload
      sessionStorage.setItem('user',payload)
    },
  },
  actions: {
  },
  modules: {
  }
})
