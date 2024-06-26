import { reactive } from "vue"

const arrivedData = reactive([])

function fetchData(inp){
    let city = ref(inp)
  
    fetch(`http://api.weatherapi.com/v1/current.json?key=9c6b22d85cd749bdbc911534221412&q=${city._value}&aqi=no`)
    .then(res => res.json())
    .then(data => {
      tempPrint = data.current.temp_c
      textPrint = data.current.condition.text
      feelsPrint = data.current.feelslike_c
      windPrint = data.current.wind_kph
      windDirPrint = data.current.wind_dir
      picture = 'https//' + (data.current.condition.icon).slice(2)
      console.log(picture)
      dataArrived.value = false
    })
    .finally(() => { dataArrived.value = true })
    .catch(err => console.warn(err))
}


export function useStore() {
    return {
        fetchData
    }
}