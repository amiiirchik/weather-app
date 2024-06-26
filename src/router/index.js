import { createRouter, createWebHistory } from 'vue-router'
import Main from '../components/Main.vue'
import WeatherOutput from '../components/WeatherOutput.vue'

const routes = [
  {
    name: 'Output',
    path: '/weather',
    component: WeatherOutput
  },
  {
    name: 'Main',
    path: '/',
    alias: '/main' 
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
// export { router }
