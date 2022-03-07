<template>
  <div>
    <div v-for="(t, index) in titles" :key="index">{{t}}</div>
    <component v-for="(c, index ) in defaults" :key="index" :is="c"/>
  </div>
</template>

<script lang="ts">
import TabLib from './TabLib.vue'
export default {
  name: "TabsLib",
  setup(props, context) {
    const defaults = context.slots.default();
    defaults.forEach((tag)=> {
      if (tag.type !== TabLib) {
        throw new Error('children component of TabsLib must be TabLib')
      }
    })
    const titles = defaults.map((tag)=>{
      return tag.props.title
    })
    return {
      defaults,
      titles
    }
  }
}
</script>

<style>

</style>