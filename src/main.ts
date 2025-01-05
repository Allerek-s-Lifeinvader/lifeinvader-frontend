import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Flicking from '@egjs/vue3-flicking/dist/flicking.esm'
import '@egjs/vue3-flicking/dist/flicking.css'
const app = createApp(App)

app.component('Flicking', Flicking)
app.mount('#app')
