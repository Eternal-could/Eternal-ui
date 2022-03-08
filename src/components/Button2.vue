<demo>
支持 size
</demo>
<template>
  <div>
    <ButtonLib size="small">你好</ButtonLib>
    <ButtonLib level="main">你好</ButtonLib>
    <ButtonLib size="big" level="danger">你好</ButtonLib>
  </div>
  <div>
    <ButtonLib size="small" theme="link">你好</ButtonLib>
    <ButtonLib theme="link" level="main">你好</ButtonLib>
    <ButtonLib size="big" theme="link" level="danger">你好</ButtonLib>
  </div>
  <div>
    <ButtonLib size="small" theme="text">你好</ButtonLib>
    <ButtonLib theme="text" level="main">你好</ButtonLib>
    <ButtonLib size="big" theme="text" level="danger">你好</ButtonLib>
  </div>
</template>

<script lang="ts">
import ButtonLib from "../lib/ButtonLib.vue";
export default {
  name:"Button2",
  components: {
    ButtonLib
  }
}
</script>