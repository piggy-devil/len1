import Vue from 'vue'
import Vuex from 'vuex'

import authModule from '../store/modules/auth/index.js'

// Make vue aware of Vuex
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth: authModule
  },
})
