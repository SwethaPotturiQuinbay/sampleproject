import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  name: null
}
const mutations = {setName (state, value) {
  state.name = value
}}
const actions = {
  setData ({commit}, name) {
    commit('setName', name)
    console.log(name)
  }
}
const getters = {
  name (state) {
    return state.name
  }
}

let store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
export default store
