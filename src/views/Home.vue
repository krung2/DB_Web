<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Card />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Card from "@/components/card/Card.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Card,
  },
};
</script>
