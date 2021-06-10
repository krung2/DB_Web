<template>
  <div>
    <div class="write">
      <div class="write-title">제목</div>
      <input
        class="write-title-input"
        placeholder="제목을 입력해주세요"
        type="text"
        :value="data.title"
        @change="setTitle"
      />

      <div class="write-content">내용</div>
      <textarea
        type="text"
        class="write-content-input"
        placeholder="내용을 입력해주세요"
        :value="data.content"
        @change="setContent"
      />
    </div>

    <div class="profile">
      <Profile v-bind:message="'등록'" @clickFunc="postPost" />
    </div>
  </div>
</template>

<script>
import Profile from "@/components/profile/Profile.vue";
import store from "../store";

export default {
  name: "Write",
  components: {
    Profile,
  },
  computed: {
    data() {
      return {
        title: store.state.title,
        content: store.state.content,
      };
    },
  },
  methods: {
    setTitle(e) {
      store.commit("setTitle", e.target.value);
    },
    setContent(e) {
      store.commit("setContent", e.target.value);
    },
    async postPost() {
      try {
        await store.dispatch("postPost");
      } catch (err) {
        alert("오류 발생");
        return;
      }

      alert("등록이 완료되었습니다");
      window.location = "/";
    },
  },
};
</script>

<style lang="scss">
@import "./Write.scss";
</style>