<script setup>
import { reactive, ref } from 'vue'
import { router } from '../router'
import { useStore } from '../storage/store.js'

const { fetchData } = useStore()

let city = ref('')

const dataArrived = ref(false)
let tempPrint = ref(''), textPrint = ref(''), feelsPrint = ref(''),
windPrint = ref(''), windDirPrint = ref('') ,picture = ref('')


if (navigator.geolocation) {w
  navigator.geolocation.getCurrentPosition(showPosition);
}
else{
  console.log('хук не работает')
}

async function showPosition(pos){
  console.log(pos)
}


// function fetchData(inp){
//   let city = ref(inp)

//   fetch(`http://api.weatherapi.com/v1/current.json?key=9c6b22d85cd749bdbc911534221412&q=${city._value}&aqi=no`)
//   .then(res => res.json())
//   .then(data => {
//     tempPrint = data.current.temp_c
//     textPrint = data.current.condition.text
//     feelsPrint = data.current.feelslike_c
//     windPrint = data.current.wind_kph
//     windDirPrint = data.current.wind_dir
//     picture = 'https//' + (data.current.condition.icon).slice(2)
//     console.log(picture)
//     dataArrived.value = false
//   })
//   .finally(() => { dataArrived.value = true })
//   .catch(err => console.warn(err))
// }

</script>

<template>
  <div>
    <div v-if="dataArrived">
      <p>1-{{picture}}</p>
      <p>2-{picture}</p>
      <img :src="picture" width="64" height="64">
      <p class="tempPrint">Temperature: {{tempPrint}}°C</p><br>
      <p class="textPrint">{{textPrint}}</p>
      <p class="feelsPrint">Feels like: {{feelsPrint}}°C</p>
      <p class="windPrint">Wind: {{windPrint}} km/h</p>
      <p class="windDirPrint" v-if="windDirPrint.length == 1">Wind direction: {{windDirPrint}}</p>
      <p class="windDirPrint" v-else>Wind direction: {{windDirPrint[0]}}-{{windDirPrint[1]}}{{windDirPrint[2]}}</p>
    </div>
    <p v-else>Погода</p>
    <input @keyup="city = inp" @keypress.enter="fetchData(inp)"  v-model="inp" placeholder="Город" autofocus>
    <button @click="useStore().fetchData(inp)">
      Узнать погоду в {{city}}
    </button>
      <router-link to="/weather">
        Перейти на другую страницу
      </router-link>
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

  button
    color: black
</style>
