import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'  //  부트스트랩 style사용하기 위해 가져오기
import 'bootstrap/dist/js/bootstrap.esm.min.js'//  부트스트랩 가져오기
const app = createApp(App)
//날짜
const offset = (new Date().getTimezoneOffset())
const today = new Date( (new Date() - (offset*60*1000)) ).toISOString().split('T')[0]
app.provide('today',today);  // 하위 컴포넌트에 주입 할수 있는값 제공

app.use(createPinia())
app.use(router)

app.mount('#app')
