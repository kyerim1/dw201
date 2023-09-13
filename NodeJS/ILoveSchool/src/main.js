import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import VueSession from 'vue-session/index'

var sessionOptions={
  persist:true
}


const firebaseConfig = {
    apiKey: "AIzaSyAWHOW-US4jKBcLLtczKEFyZ2SBg6BZzPc",
    authDomain: "iloveschool-f6efc.firebaseapp.com",
    projectId: "iloveschool-f6efc",
    storageBucket: "iloveschool-f6efc.appspot.com",
    messagingSenderId: "70645106048",
    appId: "1:70645106048:web:078502189019f67bf0ad65",
    measurementId: "G-4TRGP0LV75"
  };

firebase.initializeApp(firebaseConfig)

const app = createApp(App)

app.use(VueSession, sessionOptions)
app.use(createPinia())
app.use(router)

app.mount('#app')
