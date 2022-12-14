<script setup>
import { reactive, ref } from 'vue';

function pushToP(){
}

function fetchData(inp){
  let city = ref(inp)
  let temp = ref(null)
  let text = reactive()
  fetch('http://api.weatherapi.com/v1/current.json?key=9c6b22d85cd749bdbc911534221412&q={city._value}&aqi=no')
  .then(res => res.json())
  .then(data => temp = data.current.temp_c)
  .then(data => console.log(data))
  .finally(()=>{
    text = `Температура воздуха в ${city} : ${temp}`
  })
  .catch(err => console.warn(err))


  //pushToP()
}

</script>

<template>
  <div>
    <p>{{text}}</p>
    <input v-model="inp" placeholder="Город">
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

  p
    font-family: "Arial", monospace
    font-size: 30px
</style>
