import './assets/main.css'

import { createApp } from 'vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import App from './App.vue'
import router from './router'
import store from './store/index'

const app = createApp(App)

const vuetify = createVuetify({
    components: {
      ...components,
    },
    directives,
})

app.use(vuetify)
app.use(router)
app.use(store)
app.mount('#app')
