<template>
    <button
      class="wheel-button"
      :class="`theme-${theme}`"
    >
      <slot/>
    </button>
</template>

<script lang="ts">
export default {
  name: "ButtonLib",
  props: {
    theme: {
      type: String,
      default: "button"
    }
  }
}
</script>

<style scoped lang="scss">
  div{
    border: 1px solid red;
  }
</style>