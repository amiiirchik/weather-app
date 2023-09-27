import { createApp } from 'vue'
import VueGeolocation from 'vue-browser-geolocation';

import './style.css'
import App from './App.vue'
import router from './router'

createApp(App)
.use(VueGeolocation)
.use(router)
.mount('#app')
