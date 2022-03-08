<demo>
支持 level
</demo>
<template>
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
</template>

<script lang="ts">
import ButtonLib from "../lib/ButtonLib.vue";
export default {
  name:"Button3",
  components: {
    ButtonLib
  }
}
</script>