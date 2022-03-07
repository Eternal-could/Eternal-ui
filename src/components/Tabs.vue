<template>
  <h1>示例一</h1>
  <TabsLib>
    <TabLib title="导航1">内容1</TabLib>
    <TabLib title="导航2">内容2</TabLib>
  </TabsLib>
</template>

<script lang="ts">
import TabsLib from '../lib/TabsLib.vue'
import TabLib from '../lib/TabLib.vue'
export default {
  name: "Tabs",
  components: {
    TabsLib,
    TabLib
  }
}
</script>

<style scoped>

</style>