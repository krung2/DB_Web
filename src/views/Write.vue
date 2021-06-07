<template>
  <div>
    <div class="write">
      <div class="write-title">제목</div>
      <input class="write-title-input" placeholder="" />

      <div class="write-content">내용</div>
      <textarea
        type="text"
        class="write-content-input"
        placeholder="내용을 입력해주세요"
      />
    </div>

    <div class="profile">
      <Profile v-bind:message="'등록'" />
    </div>
  </div>
</template>

<script>
import Profile from "@/components/profile/Profile.vue";

export default {
  name: "Write",
  components: {
    Profile,
  },
};
</script>


<style lang="scss">
@import "./Write.scss";
</style>