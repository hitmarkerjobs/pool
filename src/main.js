import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import Router from "./router"
import './main.css'

createApp(App)
  .use(Router)
  .use(createPinia())
  .mount('#app')
