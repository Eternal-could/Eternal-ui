<demo>
常规使用
</demo>
<template>
  <div>
    <ButtonLib @click="toggle">打开对话框</ButtonLib>
    <DialogLib
        v-model:visible="x"
        :close-on-click-overlay="false"
        :ok="f1"
        :cancel="f2"
    >
      <template v-slot:content>
        <div>你好</div>
        <div>hi</div>
      </template>
      <template v-slot:title>
        <strong>加粗的标题</strong>
      </template>
    </DialogLib>
  </div>
</template>

<script>
import DialogLib from '../lib/DialogLib.vue'
import ButtonLib from '../lib/ButtonLib.vue'
import {ref} from 'vue';
export default {
  name:"Dialog1",
  components: {
    DialogLib,
    ButtonLib
  },
  setup() {
    const x = ref(false)
    const toggle = () => {
      x.value = !x.value
    }
    const f1 = () => {
      return false
    }
    const f2 = () => {}
    return {
      x,
      toggle,
      f1,
      f2
    }
  }
}
</script>

<style scoped>

</style>