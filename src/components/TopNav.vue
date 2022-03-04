<template>
  <div class="topNav">
    <div class="logo" @click="toggleAside">LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
    <span class="toggleAside"></span>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from 'vue';

export default {
  name: "TopNav",
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible')
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value;
    }
    return {toggleAside}
  }
}
</script>

<style scoped lang="scss">
.topNav {
  position: relative;
  z-index: 10;
  background: Lavender;
  display: flex;
  padding: 16px;
  justify-content: center;
  align-items: center;

  > .logo {
    max-width: 6em;
    margin-right: auto;
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;
    }
  }
  > .toggleAside {
    display: none;
    width: 36px;
    height: 6px;
    background-color: #453654;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    &::before,&::after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
    }
    &::before {
      top: -12px;
      background-color: #453654;
    }
    &::after {
      top: 12px;
      background-color: #453654;
    }
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;

    }
  }
}
</style>