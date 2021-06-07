/* disable-eslint */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: {},
  },
  mutations: {
    getPosts: async (state) => {
      state.posts = (await axios.get('http://10.80.161.242:8000/post')).data.data;
    }
  },
  actions: {
    getPosts: async ({ commit }) => {
      commit('getPosts');
    }
  },
  modules: {
  }
})
