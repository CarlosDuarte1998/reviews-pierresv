import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const components = import.meta.glob('./components/**/*.vue', { eager: true })

const app = createApp(App)

for (const path in components) {
    const name = path.split('/').pop().replace(/\.\w+$/, '')
    app.component(name, components[path].default)
    }
app.use(createPinia())
app.use(router)

app.mount('#app')
