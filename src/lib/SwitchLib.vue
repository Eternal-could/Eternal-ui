<template>
  <button
      @click="toggle"
      :class="{checked}">
    <span></span>
  </button>
</template>

<script lang="ts">
import {ref} from 'vue';
import Button from '../components/Button.vue';

export default {
  name: "SwitchLib",
  components: {Button},
  setup() {
    const checked = ref(false)
    const toggle = () => {
      checked.value = !checked.value
    }
    return {checked,toggle}
  }
}
</script>

<style scoped lang="scss">
  button{
    height: 22px;
    width: 44px;
    border: none;
    background: gray;
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
    transition: left 250ms;
  }
  button.checked {
    background: blue;
  }
  button.checked > span {
    left: calc(100% - 18px - 2px);
  }
  button:focus {
    outline: none;
  }
</style>