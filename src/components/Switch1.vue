<demo>
常规用法
</demo>
<template>
  <SwitchLib v-model:value="bool"/>
</template>

<script lang="ts">
import SwitchLib from '../lib/SwitchLib.vue';
import {ref} from 'vue';

export default {
  name: "Switch1",
  components: {SwitchLib},
  setup() {
    const bool = ref(false)
    return {bool}
  }
}
</script>

<style scoped>

</style>