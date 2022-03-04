<template>
  <div>
    <TopNav/>
    <div class="banner">
      <h1>轮子ui</h1>
      <h2>一个厉害的UI框架</h2>
      <p class="actions">
        <a href="">GitHub</a>
        <a href="">开始</a>
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

</style>