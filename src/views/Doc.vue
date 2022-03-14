<template>
  <div class="layout">
    <TopNav class="nav" :toggle-menu-button-visible="true"/>
    <div class="content">
      <aside v-if="asideVisible">
        <h2>文档</h2>
        <ol>
          <li><router-link to="/doc/intro">介绍</router-link></li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue';
import {inject, Ref} from 'vue';

export default {
  name: 'Doc',
  components: {TopNav},
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible')
    return {asideVisible}
  }
};
</script>

<style scoped lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
    background: white;
  }
}
aside {
  //background-color: rgb(150,159,225);
  background-image: linear-gradient(to left bottom,  #ba83ca, #8aa7ec, #79b3f4, #69bff8);
  width: 150px;
  position: fixed;
  top: 0;
  left: 0;
  padding: 70px 0 16px;
  height: 100%;
  z-index: 2;
  > h2 {
    margin-bottom: 4px;
    padding: 0 16px;
  }

  > ol {
    > li {
      > a {
        display: block;
        padding: 4px 16px;
        text-decoration: none;
      }
      .router-link-active {
        background: snow;
      }
    }
  }
  main{
    overflow: auto;
  }
}
</style>