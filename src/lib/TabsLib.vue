<template>
  <div class="wheel-tabs">
    <div class="wheel-tabs-nav">
      <div
          class="wheel-tabs-nav-item"
          v-for="(t, index) in titles"
          @click="select(t)"
          :class="{selected: t === selected}"
          :key="index">{{t}}</div>
    </div>
    <div class="wheel-tabs-content">
      <component
          class="wheel-tabs-content-item"
          :class="{selected: c.props.title === selected}"
          v-for="(c,index) in defaults"
          :key="index"
          :is="c"/>
    </div>
  </div>
</template>

<script lang="ts">
import TabLib from './TabLib.vue'
import {computed} from 'vue';
export default {
  name: "TabsLib",
  props:{
    selected: {
      type: Boolean,
      default: true
    }
  },
  setup(props, context) {
    const defaults = context.slots.default();
    defaults.forEach((tag)=> {
      if (tag.type !== TabLib) {
        throw new Error('children component of TabsLib must be TabLib')
      }
    })
    const current = computed(()=>{
      console.log('review');
      return  defaults.filter((tag)=>{
        return  tag.props.title === props.selected
      })[0]
    })
    const titles = defaults.map((tag)=>{
      return tag.props.title
    })
    const select = (title: string) => {
      context.emit('update:selected', title)
    }
    return {
      defaults,
      titles,
      current,
      select
    }
  }
}
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.wheel-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
  }
  &-content {
    padding: 8px 0;
    &-item {
      display: none;
      &.selected {
        display: block;
      }
    }
  }
}
</style>