<template>
  <div>
    <h1>Switch 组件示例 </h1>
    <div class="demo">
      <h2>常规用法</h2>
      <div class="demo-component">
        <component :is="Switch1"></component>
      </div>
      <div class="demo-actions">
        <ButtonLib>查看代码</ButtonLib>
      </div>
      <div class="demo-code">
        <pre v-text="Switch1.__sourceCode"></pre>
      </div>
    </div>
    <div class="demo">
      <h2>支持 disabled </h2>
      <div class="demo-component">
        <component :is="Switch2"></component>
      </div>
      <div class="demo-actions">
        <ButtonLib>查看代码</ButtonLib>
      </div>
      <div class="demo-code">
        <pre v-text="Switch2.__sourceCode"></pre>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import SwitchLib from '../lib/SwitchLib.vue'
import ButtonLib from '../lib/ButtonLib.vue'
import Switch1 from './Switch1.vue'
import Switch2 from './Switch2.vue'


import {ref} from 'vue';
export default {
  name: "Switch",
  components: {ButtonLib, SwitchLib, Switch1, Switch2},
  setup() {
    const bool = ref(false)
    return {bool, Switch1, Switch2}
  }
}
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  >h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    >pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>