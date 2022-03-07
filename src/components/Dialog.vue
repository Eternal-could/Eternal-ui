<template>
  <h1>示例一</h1>
  <ButtonLib @click="toggle">toggle</ButtonLib>
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
  <h1>示例二</h1>
  <ButtonLib @click="showDialog">show</ButtonLib>
</template>

<script lang="ts">
import DialogLib from "../lib/DialogLib.vue";
import ButtonLib from "../lib/ButtonLib.vue";
import {openDialog} from '../lib/openDialog.ts';
import {ref} from 'vue';
export default {
  name: "Dialog",
  components: {DialogLib, ButtonLib},
  setup() {
    const x = ref(false)
    const toggle = () => {
      x.value = !x.value
    }
    const f1 = () => {
      return false
    }
    const f2 = () => {
    }
    const showDialog = () => {
      openDialog({
        title:'标题',
        content: '你好',
        ok() {
          console.log('ok')
        },
        cancel() {
          console.log('cancel');
        }
      })

    }
    return {
      x,
      toggle,
      f1,
      f2,
      showDialog
    }
  }
}
</script>

<style lang="scss">

</style>