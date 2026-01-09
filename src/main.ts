import { createApp } from 'vue'
import '@/assets/scss/main.scss'
import App from './App.vue'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import { InputText, Password, Checkbox } from 'primevue'

const app = createApp(App)

app.use(router)
app.use(store)

app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
})
app.component('InputText', InputText)
app.component('Password', Password)
app.component('Checkbox', Checkbox)

app.mount('#app')
