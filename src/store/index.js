/* disable-eslint */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: {}
  },
  mutations: {
    getData: async (state) => {
      state.data = (await axios.get('http://10.80.161.242:8000/post')).data.data;
    }
  },
  actions: {
    getData: async ({ commit }) => {
      commit('getData');
    }
  },
  modules: {
  }
})
