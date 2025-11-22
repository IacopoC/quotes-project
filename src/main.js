import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createHead } from '@vueuse/head'
import { createPinia } from 'pinia'

const app = createApp(App)

const head = createHead()

app.use(router);
app.use(head);
app.use(createPinia());

app.mount('#app')
