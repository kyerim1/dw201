import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.esm.min.js'
const app = createApp(App)
//날짜
const offset = (new Date().getTimezoneOffset())
const today = new Date( (new Date() - (offset*60*1000)) ).toISOString().split('T')[0]
app.provide('today',today);


app.use(createPinia())
app.use(router)

app.mount('#app')
