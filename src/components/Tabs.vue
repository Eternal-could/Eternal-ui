<template>
  <h1>Tab组件</h1>
  <Demo :component="Tabs1" />
</template>
<script lang="ts">
import Tabs1 from  './Tabs1.vue'
import Demo from './Demo.vue'
export default {
  name: "Tabs",
  components: {
    Demo
  },
  setup() {
    return {Tabs1}
  }
}
</script>

<style scoped>

</style>