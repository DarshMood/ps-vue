import { createApp } from 'vue'
import App from './App.vue'
import router from './js'
import 'primeicons/primeicons.css'
import './assets/styles.css'

createApp(App)
.use(router)
.mount('#app')