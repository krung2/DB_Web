<template>
  <div class="container">
    <div class="text-container">
      <div class="main-text">{{ post.title }}</div>

      <img
        v-if="post.isExistLike"
        class="main-like"
        @click="addLike(post.idx)"
        src="../../assets/images/thumbs-o-up.svg"
      />
      <img
        v-else
        class="main-like"
        @click="alertLike()"
        src="../../assets/images/thumbs-up.svg"
      />

      <div class="main-num">{{ post.likeCount }}</div>
    </div>

    <div class="sub-text">
      {{ post.name }} | {{ post.createdAt.slice(0, 10) }}
    </div>
    <div class="content-container">
      {{ post.content }}
    </div>
  </div>
</template>

<script>
import store from "../../store";
export default {
  name: "Card",
  props: ["post"],
  computed: {
    isLikeFunc: () => {
      return this.post.isExistLike;
    },
    likeFunc: () => {
      return this.post.likeCount;
    },
  },
  methods: {
    async addLike(idx) {
      console.log(window.location.protocol);
      await store.dispatch("addLike", idx);
      this.post.isExistLike = false;
      this.post.likeCount++;
    },
    async alertLike() {
      alert("좋아요는 하루에 한번만 누를 수 있습니다");
      window.location.reload;
    },
  },
};
</script>

<style lang='scss'>
@import "./card.scss";
</style>