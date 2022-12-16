<script setup>
import { ref } from 'vue';

const dataArrived = ref(false)
let tempPrint = ref('')
let textPrint = ref('')
let feelsPrint = ref('')
let windPrint = ref('')


function fetchData(inp){
  let city = ref(inp)

  fetch(`http://api.weatherapi.com/v1/current.json?key=9c6b22d85cd749bdbc911534221412&q=${city._value}&aqi=no`)
  .then(res => res.json())
  .then(data => {
    tempPrint = data.current.temp_c
    textPrint = data.current.condition.text
    feelsPrint = data.current.feelslike_c
    windPrint = data.current.wind_kph
    dataArrived.value = false
  })
  .finally(() => { dataArrived.value = true })
  .catch(err => console.warn(err))
}

</script>

<template>
  <div>
    <div v-if="dataArrived">
      <p class="tempPrint">Температура: {{tempPrint}}</p><br>
      <p class="textPrint">{{textPrint}}</p>
      <p class="feelsPrint">Ощущается как: {{feelsPrint}}</p>
      <p class="windPrint">Скорость ветра: {{windPrint}}</p>
    </div>
    <p v-else>Погода</p>
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
    color: black

  .tempPrint
    width: 100%
    display: flex
    justify-content: center
</style>
