/* disable-eslint */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: {},
    title: null,
    content: null
  },
  mutations: {
    getPosts: async (state) => {
      console.log(state.posts)
      state.posts = (await axios.get('http://10.80.161.242:8000/post')).data.data;
      console.log(state.posts)
    },
    postPost: async (state) => {
      await axios.post('http://10.80.161.242:8000/post', {
        title: state.title,
        content: state.content,
      })
    },
    setTitle: async (state, text) => {
      state.title = text
    },
    setContent: async (state, text) => {
      state.content = text
    },
  },
  actions: {
    getPosts: async ({ commit }) => {
      commit('getPosts');
    },
    postPost: async ({ commit }) => {
      commit('postPost');
    },
  },
  modules: {
  }
})
