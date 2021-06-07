<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div class="card-list">
      <div v-for="data in datas" v-bind:key="data.idx">
        <Card v-bind:data="data" />
      </div>
    </div>

    <div class="profile">
      <Profile />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Card from "@/components/card/Card.vue";
import Profile from "@/components/profile/Profile.vue";
import store from "../store";

export default {
  name: "Home",
  components: {
    // HelloWorld,
    Card,
    Profile,
  },
  computed: {
    datas() {
      return store.state.data;
    },
  },
  created: async () => {
    await store.dispatch("getData");
  },
};
</script>

<style lang="scss">
@import "./Home.scss";
</style>
