<demo>
支持 disabled
</demo>
<template>
  <div>
    <ButtonLib disabled>禁用按钮</ButtonLib>
    <ButtonLib theme="link" disabled>禁用链接按钮</ButtonLib>
    <ButtonLib theme="text" disabled>禁用文本按钮</ButtonLib>
  </div>
</template>

<script lang="ts">
import ButtonLib from "../lib/ButtonLib.vue";
export default {
  name:"Button4",
  components: {
    ButtonLib
  }
}
</script>