<template>
  <div>
    <SwitchLib v-model:value="y"/>
  </div>
</template>

<script lang="ts">
import SwitchLib from '../lib/SwitchLib.vue'
import {ref} from 'vue';
export default {
  name: "Switch",
  components: {SwitchLib},
  setup() {
    const y = ref(false)
    return {y}
  }
}
</script>

<style scoped>

</style>