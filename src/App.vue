<script setup>
import Main from './components/Main.vue'
import WeatherOutput from './components/WeatherOutput.vue'
</script>

<template>
  <Main />
  <WeatherOutput />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
