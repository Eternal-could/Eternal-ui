<template>
  <h1>示例一</h1>
  <ButtonLib @click="toggle">toggle</ButtonLib>
  <DialogLib :visible="x"/>
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
    return {x, toggle}
  }
}
</script>

<style lang="scss">

</style>