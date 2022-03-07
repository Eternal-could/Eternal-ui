<template>
  <div class="wheel-tabs">
    <div class="wheel-tabs-nav" ref="container">
      <div
          class="wheel-tabs-nav-item"
          v-for="(t, index) in titles"
          :ref="el => { if (t===selected) selectedItem = el }"
          @click="select(t)"
          :class="{selected: t === selected}"
          :key="index">{{t}}</div>
      <div
          class="wheel-tabs-nav-indicator"
          ref="indicator"
      ></div>
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
import {onMounted, onUpdated, ref} from 'vue';
export default {
  name: "TabsLib",
  props:{
    selected: {
      type: Boolean,
      default: true
    }
  },
  setup(props, context) {
    const selectedItem = ref<HTMLDivElement>(null)
    const indicator = ref<HTMLDivElement>(null)
    const container = ref<HTMLDivElement>(null)
    const x = () => {
      const {width} = selectedItem.value.getBoundingClientRect()
      indicator.value.style.width = width + 'px'
      const {left:left1} = container.value.getBoundingClientRect();
      const {left:left2} = selectedItem.value.getBoundingClientRect();
      const left = left2 - left1;
      indicator.value.style.left = left +'px';
    }
    onMounted(()=>{
      x()
    })
    onUpdated(()=> {
      x()
    })
    const defaults = context.slots.default();
    defaults.forEach((tag)=> {
      if (tag.type !== TabLib) {
        throw new Error('children component of TabsLib must be TabLib')
      }
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
      select,
      selectedItem,
      indicator,
      container
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
    position: relative;
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
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
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