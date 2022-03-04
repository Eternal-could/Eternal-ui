<template>
  <div>
    <SwitchLib v-model:value="bool"/>
  </div>
</template>

<script lang="ts">
import SwitchLib from '../lib/SwitchLib.vue'
import {ref} from 'vue';
export default {
  name: "Switch",
  components: {SwitchLib},
  setup() {
    const bool = ref(false)
    return {bool}
  }
}
</script>

<style scoped>

</style>