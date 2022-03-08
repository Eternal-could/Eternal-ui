<demo>
常规使用
</demo>
<template>
  <TabsLib v-model:selected="x">
    <TabLib title="导航1">内容1</TabLib>
    <TabLib title="导航2">内容2</TabLib>
  </TabsLib>
</template>

<script lang="ts">
import TabsLib from '../lib/TabsLib.vue';
import TabLib from '../lib/TabLib.vue';
import {
  ref
} from 'vue';

export default {
  components: {
    TabsLib,
    TabLib
  },
  setup() {
    const x = ref('导航2');
    return {
      x
    };
  }
};
</script>