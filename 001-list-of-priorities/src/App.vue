<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
import Home from './view/Home.vue';

export default {
  name: 'App',
  components: {
    Home,
  },

};
</script>

<style lang="scss">
body{
  height: 100%;
  background: #f3f3f3c0;
}

#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
