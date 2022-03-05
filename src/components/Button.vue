<template>
  <div>Button文档</div>
  <h1>示例1</h1>
  <div>
    <ButtonLib theme="button">你好</ButtonLib>
    <ButtonLib theme="button" level="main">你好</ButtonLib>
    <ButtonLib theme="link" level="success">你好</ButtonLib>
    <ButtonLib theme="text" level="danger">你好</ButtonLib>
  </div>
  <br>
  <h1>示例2</h1>
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
  <br>
  <h1>示例3</h1>
  <div>
    <ButtonLib>普通按钮</ButtonLib>
    <ButtonLib level="main">主要按钮</ButtonLib>
    <ButtonLib level="success">成功按钮</ButtonLib>
    <ButtonLib level="warning">警告按钮</ButtonLib>
    <ButtonLib level="danger">危险按钮</ButtonLib>
  </div>
  <div>
    <ButtonLib theme="link">普通链接按钮</ButtonLib>
    <ButtonLib level="main" theme="link">主要链接按钮</ButtonLib>
    <ButtonLib level="success" theme="link">成功链接按钮</ButtonLib>
    <ButtonLib level="warning" theme="link">警告链接按钮</ButtonLib>
    <ButtonLib level="danger" theme="link">危险链接按钮</ButtonLib>
  </div>
  <div>
    <ButtonLib theme="text">普通文本按钮</ButtonLib>
    <ButtonLib level="main" theme="text">主要文本按钮</ButtonLib>
    <ButtonLib level="success" theme="text">成功文本按钮</ButtonLib>
    <ButtonLib level="warning" theme="text">警告文本按钮</ButtonLib>
    <ButtonLib level="danger" theme="text">危险文本按钮</ButtonLib>
  </div>
  <br>
  <h1>示例4</h1>
  <div>
    <ButtonLib disabled>禁用按钮</ButtonLib>
    <ButtonLib theme="link" disabled>禁用链接按钮</ButtonLib>
    <ButtonLib theme="text" disabled>禁用文本按钮</ButtonLib>
  </div>
  <br>
  <h1>示例5</h1>
  <div>
    <ButtonLib loading>加载中</ButtonLib>
    <ButtonLib>加载完毕</ButtonLib>
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