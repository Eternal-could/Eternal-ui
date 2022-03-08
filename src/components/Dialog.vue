<template>
  <h1>Dialog 组件</h1>
  <Demo :component="Dialog1"></Demo>
  <Demo :component="Dialog2"></Demo>
</template>

<script lang="ts">
import Dialog1 from './Dialog1.vue'
import Dialog2 from './Dialog2.vue'
import Demo from './Demo.vue'
export default {
  name: 'Dialog',
  components: {Demo},
  setup() {
    return {Dialog1,Dialog2}
  }
};
</script>

<style lang="scss">

</style>