import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue3, BootstrapVueIcons } from 'bootstrap-vue-3'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

createApp(App).use(BootstrapVue3).use(BootstrapVueIcons).use(router).mount('#app')
