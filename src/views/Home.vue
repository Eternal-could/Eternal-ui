<template>
  <div class="topNavAndBanner">
    <TopNav/>
    <div class="banner">
      <h1>轮子UI</h1>
      <h2>一个简单的UI框架</h2>
      <p class="actions">
        <a href="https://github.com">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from "../components/TopNav.vue";
export default {
  name: "Home",
  components: {TopNav}
}
</script>

<style scoped lang="scss">
.topNavAndBanner{
  background-image: linear-gradient(to left top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);
}
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > .actions{
    padding: 8px 0;
    a {
      margin:0 8px;
      background: #fff;
      display: inline-block;
      height: 28px;
      line-height: 28px;
      border-radius: 14px;
      padding: 0 8px;
    }
  }
}
</style>