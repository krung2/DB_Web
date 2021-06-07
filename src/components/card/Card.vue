<template>
  <div class="container">
    <div class="text-container">
      <div class="main-text">{{ data.title }}</div>
    </div>

    <div class="sub-text">
      {{ data.name }} | {{ data.createdAt.slice(0, 10) }}
    </div>
    <div class="content-container">
      {{ data.content }}
    </div>

    <div></div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["data"],
};
</script>

<style lang='scss'>
@import "./card.scss";
</style>