<template>
  <div>Button文档</div>
  <h1>示例1</h1>
  <div>
    <ButtonLib>你好</ButtonLib>
    <ButtonLib theme="button">你好</ButtonLib>
    <ButtonLib theme="link">你好</ButtonLib>
    <ButtonLib theme="text">你好</ButtonLib>
  </div>
  <br>
  <h1>示例2</h1>
  <div>
    <ButtonLib size="small">你好</ButtonLib>
    <ButtonLib>你好</ButtonLib>
    <ButtonLib size="big">你好</ButtonLib>
  </div>
  <div>
    <ButtonLib size="small" theme="link">你好</ButtonLib>
    <ButtonLib theme="link">你好</ButtonLib>
    <ButtonLib size="big" theme="link">你好</ButtonLib>
  </div>
  <div>
    <ButtonLib size="small" theme="text">你好</ButtonLib>
    <ButtonLib theme="text">你好</ButtonLib>
    <ButtonLib size="big" theme="text">你好</ButtonLib>
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