<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div class="card-list">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
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

export default {
  name: "Home",
  components: {
    // HelloWorld,
    Card,
    Profile,
  },
};
</script>

<style lang="scss">
@import "./Home.scss";
</style>
