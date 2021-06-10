<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div class="card-list">
      <div v-for="post in posts" v-bind:key="post.idx">
        <Card v-bind:post="post" />
      </div>
    </div>

    <div class="profile">
      <Profile
        v-bind:message="'로그인'"
        v-bind:isLogin="true"
        v-bind:isFilter="true"
        @clickFunc="alertDevelop"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Card from "@/components/card/Card.vue";
import Profile from "@/components/profile/Profile.vue";
import store from "../store";
import { v4 as uuid } from "uuid";

export default {
  name: "Home",
  components: {
    // HelloWorld,
    Card,
    Profile,
  },
  computed: {
    posts() {
      return store.state.posts;
    },
  },
  created: async () => {
    await store.dispatch("getPosts");

    store.commit("setToken", localStorage.getItem("token"));

    if (store.state.token === null) {
      localStorage.setItem("token", uuid());
      store.commit("setToken", localStorage.getItem("token"));
    }
  },
  methods: {
    alertDevelop() {
      alert("아직 개발중인 기능입니다 조금만 기다려주세요 :)");
    },
  },
};
</script>

<style lang="scss">
@import "./Home.scss";
</style>
