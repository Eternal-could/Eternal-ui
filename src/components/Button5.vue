<demo>
支持 加载中
</demo>
<template>
  <div>
    <ButtonLib loading>加载中</ButtonLib>
    <ButtonLib>加载完毕</ButtonLib>
  </div>
</template>

<script lang="ts">
import ButtonLib from "../lib/ButtonLib.vue";
export default {
  name:"Button5",
  components: {
    ButtonLib
  }
}
</script>