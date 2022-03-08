<demo>
常规使用
</demo>
<template>
  <div>
    <ButtonLib theme="button">你好</ButtonLib>
    <ButtonLib theme="button" level="main">你好</ButtonLib>
    <ButtonLib theme="link" level="success">你好</ButtonLib>
    <ButtonLib theme="text" level="danger">你好</ButtonLib>
  </div>
</template>

<script lang="ts">
import ButtonLib from "../lib/ButtonLib.vue";
export default {
  name:"Button1",
  components: {
    ButtonLib
  }
}
</script>