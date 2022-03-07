<template>
  <div class="dialog-overlay"></div>
  <div class="dialog-wrapper">
    <header>标题</header>
    <main>
      <p>第一行内容</p>
      <p>第二行内容</p>
    </main>
    <footer>
      <ButtonLib>OK</ButtonLib>
      <ButtonLib>Cancel</ButtonLib>
    </footer>
  </div>
</template>

<script lang="ts">
import ButtonLib from '../lib/ButtonLib.vue'
export default {
  name: "DialogLib",
  components: {ButtonLib}
}
</script>

<style scoped>

</style>