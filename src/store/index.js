/* disable-eslint */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: {},
    title: null,
    content: null,
    check: false,
  },
  mutations: {
    getPosts: async (state) => {
      state.posts = (await axios.get('http://10.80.160.201:8091/post')).data.data;
    },
    postPost: async (state) => {
      await axios.post('http://10.80.160.201:8091/post', {
        title: state.title,
        content: state.content,
      })
    },
    addLike: async (state, idx) => {
      await axios.post(`http://10.80.160.201:8091/like/${idx}`);
    },
    setTitle: async (state, text) => {
      state.title = text
    },
    setContent: async (state, text) => {
      state.content = text
    },
    setCheck: (state) => {
      state.check = state.check ? false : true;
    },
  },
  actions: {
    getPosts: async ({ commit }) => {
      commit('getPosts');
    },
    postPost: async ({ commit }) => {
      commit('postPost');
    },
    addLike: async ({ commit }, idx) => {
      commit('addLike', idx);
    }
  },
  modules: {
  }
})
