<template>
  <div class="demo">
    <h2>{{ component.__sourceCodeTitle }}</h2>
    <div class="demo-component">
      <component :is="component"></component>
    </div>
    <div class="demo-actions">
      <ButtonLib @click="codeVisible = !codeVisible">查看代码</ButtonLib>
    </div>
    <div class="demo-code" v-if="codeVisible">
      <pre class="language-html" v-html="html"></pre>
    </div>
  </div>
</template>

<script lang="ts">
import ButtonLib from '../lib/ButtonLib.vue'
import 'prismjs';
import 'prismjs/themes/prism-okaidia.css'
import {computed, ref} from 'vue';
const Prism = (window as any).Prism
export default {
  name: "Demo",
  props: {
    component: Object
  },
  components:{ButtonLib},
  setup(props) {
    const html = computed(()=>{
      return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html')
    })
    const codeVisible = ref(false)
    return {Prism,html,codeVisible}
  }
}
</script>

<style scoped lang="scss">
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