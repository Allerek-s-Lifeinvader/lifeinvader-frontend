import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Flicking from '@egjs/vue3-flicking/dist/flicking.esm'
import '@egjs/vue3-flicking/dist/flicking.css'
import 'primeicons/primeicons.css'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import { definePreset } from '@primevue/themes'
import { Popover } from 'primevue'
const app = createApp(App)

const myPreset = definePreset(Aura, {
  components: {
    button: {
      colorScheme: {
        dark: {
          primary: {
            background: 'transparent',
            borderColor: 'transparent',
            color: '#e5e5e5',
            justifyContent: 'start',

            hoverBackground: '#453e5c',
            hoverColor: '#c5a1f9',
            hoverBorderColor: '#453e5c',
          },
        },
      },
    },
    popover: {
      colorScheme: {
        root: {
          background: '#212121',
        },
      },
    },
  },
})

app.component('Flicking', Flicking)
app.use(PrimeVue, {
  theme: {
    preset: myPreset,
  },
})
app.mount('#app')
