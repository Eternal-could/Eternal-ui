<template>
  <div :size="size">
    <button v-bind="$attrs">
      <slot/>
    </button>
  </div>
</template>

<script lang="ts">
export default {
  name: "ButtonLib",
  inheritAttrs: false,
  setup(props, context) {
    const {size,...rest} =  context.attrs
    return {size, rest}
  }
}
</script>

<style scoped lang="scss">
  div{
    border: 1px solid red;
  }
</style>