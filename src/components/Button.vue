<template>
  <h1>Button 组件</h1>
  <Demo :component="Button1"></Demo>
  <Demo :component="Button2"></Demo>
  <Demo :component="Button3"></Demo>
  <Demo :component="Button4"></Demo>
  <Demo :component="Button5"></Demo>
</template>

<script lang="ts">
import Demo from '../components/Demo.vue'
import Button1 from '../components/Button1.vue'
import Button2 from '../components/Button2.vue'
import Button3 from '../components/Button3.vue'
import Button4 from '../components/Button4.vue'
import Button5 from '../components/Button5.vue'
export default {
  name: "Button",
  components: {Demo},
  setup() {
    const onClick = ()=> {
      console.log("hi");
    }
    return {onClick, Button1, Button2, Button3, Button4, Button5}
  }
}
</script>

<style scoped lang="scss">

</style>