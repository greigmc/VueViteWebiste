<script setup>
import Nav from './components/nav/Nav.vue'
import Footer from './components/footer/Footer.vue'

</script>
<!-- src/App.vue -->
<template>
  <div id="app">
      <Nav />
      <router-view></router-view>
      <Footer />
  </div>
</template>


<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
