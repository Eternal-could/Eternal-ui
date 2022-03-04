<template>
  <div>导航栏 |
    <router-link to="/">Fir</router-link> |
    <router-link to="/xxx">Fir2</router-link>
  </div>
  <router-view/>
</template>

<script>

export default {
  name: 'App',
}
</script>
