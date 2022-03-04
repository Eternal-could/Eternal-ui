<template>
  <button><span></span></button>
</template>

<script>
export default {
  name: "SwitchLib"
}
</script>

<style scoped lang="scss">
  button{
    height: 22px;
    width: 44px;
    border: none;
    background: blue;
    border-radius: 11px;
    position: relative;
  }
  span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: 18px;
    width: 18px;
    background: white;
    border-radius: 9px;
  }
</style>