<template>
  <v-app id="app">
    <Home />
  </v-app>

</template>

<script>
import Home from './pages/Home.vue';

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #00a0dc;
  height: 100%;
}
</style>
