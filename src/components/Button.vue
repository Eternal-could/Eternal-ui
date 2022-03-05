<template>
  <div>Button文档</div>
  <h1>示例1</h1>
  <div>
    <ButtonLib
        @click="onClick"
        @focus="onClick"
        @mouseover="onClick"
    >你好</ButtonLib>
  </div>
</template>

<script lang="ts">
import ButtonLib from '../lib/ButtonLib.vue'
export default {
  name: "Button",
  components: {ButtonLib},
  setup() {
    const onClick = ()=> {
      console.log("hi");
    }
    return {onClick}
  }
}
</script>

<style scoped lang="scss">

</style>