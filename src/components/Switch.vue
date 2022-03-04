<template>
  <div>
    <SwitchLib :value="y" @input="y = $event"/>
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