import Vue from 'vue'
import Vuex from 'vuex'
import todo from './modules/todo'
import createPersistedState from "vuex-persistedstate";


Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    todo,
  },
  strict: debug,
  plugins: [createPersistedState()]
})