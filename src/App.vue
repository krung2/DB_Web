<template>
  <div id="app">
    <div class="nav" id="nav">
      <div class="nav-text">
        <router-link class="" to="/">홈</router-link> |
        <router-link class="" to="/write">글쓰기</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "./app.scss";
@import "./reset.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #808080;
}

#nav {
  a {
    text-decoration: none;
    color: #808080;
    &.router-link-exact-active {
      color: white;
    }
  }
}
</style>
