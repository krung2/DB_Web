<template>
  <div class="profile-container">
    <div class="login-button">{{ message }}</div>
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
};
</script>

<style lang="scss">
@import "./profile.scss";
</style>
