<demo>
一键打开 Dialog
</demo>
<template>
  <div>
    <ButtonLib @click="showDialog">show</ButtonLib>
  </div>
</template>

<script>
import ButtonLib from '../lib/ButtonLib.vue'
import {openDialog} from '../lib/openDialog.ts';
import {h} from 'vue';
export default {
  components: {
    ButtonLib
  },
  setup() {
    const showDialog = () => {
      openDialog({
        title: h('strong', {}, '标题'),
        content: '你好',
        ok() {
          console.log('ok')
        },
        cancel() {
          console.log('cancel')
        }
      })
    }
    return {
      showDialog
    }
  }
}
</script>

<style scoped>

</style>