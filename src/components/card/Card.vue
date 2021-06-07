<template>
  <div class="container">
    <div class="text-container">
      <div class="main-text">{{ post.title }}</div>
    </div>

    <div class="sub-text">
      {{ post.name }} | {{ post.createdAt.slice(0, 10) }}
    </div>
    <div class="content-container">
      {{ post.content }}
    </div>

    <div></div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["post"],
};
</script>

<style lang='scss'>
@import "./card.scss";
</style>