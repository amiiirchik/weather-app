<script setup>
import { reactive, ref, computed } from 'vue';

function pushToP(){
}

function fetchData(inp){
  let city = ref(inp)
  let text = ref()

  fetch(`http://api.weatherapi.com/v1/current.json?key=9c6b22d85cd749bdbc911534221412&q=${city._value}&aqi=no`)
  .then(res => res.json())
  .then(data => data.current.temp_c)
  .then(temp => text = temp + 'asd')
  .catch(err => console.warn(err))


  //pushToP()
}

</script>

<template>
  <div>
    <p>{{text}}</p>
    <input v-model="inp" @keydown.enter="fetchData(inp)" placeholder="Город">
    <button @focusout="fetchData(inp)">Посмотреть погоду</button>
  </div>
</template>

<style scoped lang="sass">
div
  display: flex
  justify-content: center
  flex-direction: column
  background: beige
  border-radius: 12px
  *
    margin: 10px

  input
    outline: none
    border: none
    height: 20px

  p
    font-family: "Arial", monospace
    font-size: 30px
</style>
