<template>
  <div class="profile-container">
    <div class="login-button" @click="clickFunc()">{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  props: {
    message: String,
    isLogin: Boolean,
    isFilter: Boolean,
  },
  methods: {
    clickFunc() {
      this.$emit("clickFunc");
    },
  },
};
</script>

<style lang="scss">
@import "./profile.scss";
</style>
