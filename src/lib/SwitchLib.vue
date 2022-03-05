<template>
  <button class="wheel-switch"
      @click="toggle"
      :class="{'wheel-checked':value}">
    <span></span>
  </button>
</template>

<script lang="ts">

export default {
  name: "SwitchLib",
  props: {
    value: Boolean
  },
  setup(props, context) {
    const toggle = () => {
      context.emit('update:value', !props.value)
    }
    return {toggle}
  }
}
</script>

<style lang="scss">
.wheel-switch{
    height: 22px;
    width: 44px;
    border: none;
    background: #bfbfbf;
    border-radius: 11px;
    position: relative;
    > span {
      position: absolute;
      top: 2px;
      left: 2px;
      height: 18px;
      width: 18px;
      background: white;
      border-radius: 9px;
      transition: all 250ms;
    }
    &.wheel-checked {
      background: #1890ff;
      > span {
        left: calc(100% - 18px - 2px);
      }
    }
    &:focus {
      outline: none;
    }
    &:active{
      > span {width: 22px;}
    }
    &.wheel-checked:active{
      > span {width: 22px; margin-left: -4px;}
    }
  }

</style>