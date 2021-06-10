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
    token: null,
  },
  mutations: {
    getPosts: async (state) => {
      state.posts = (await axios.get(`http://34.64.75.208:8004/post?token=${state.token}`)).data.data;
    },
    postPost: async (state) => {
      await axios.post('http://34.64.75.208:8004/post', {
        title: state.title,
        content: state.content,
      })
    },
    addLike: async (state, idx) => {
      await axios.post(`http://10.80.160.201:8004/like/${idx}?token=${state.token}`);
    },
    setTitle: async (state, text) => {
      state.title = text;
    },
    setContent: async (state, text) => {
      state.content = text;
    },
    setToken: (state, token) => {
      state.token = token;
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
