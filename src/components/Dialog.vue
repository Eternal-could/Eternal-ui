<template>
  <h1>示例一</h1>
  <ButtonLib @click="toggle">toggle</ButtonLib>
  <DialogLib
      v-model:visible="x"
      :close-on-click-overlay="false"
      :ok="f1"
      :cancel="f2"
  />
</template>

<script lang="ts">
import DialogLib from "../lib/DialogLib.vue";
import ButtonLib from "../lib/ButtonLib.vue";
import {ref} from 'vue';
export default {
  name: "Dialog",
  components: {DialogLib, ButtonLib},
  setup() {
    const x = ref(false)
    const toggle = () => {
      x.value = !x.value
    }
    const f1 = () => {
      return false
    }
    const f2 = () => {
    }
    return {
      x,
      toggle,
      f1,
      f2
    }
  }
}
</script>

<style lang="scss">

</style>