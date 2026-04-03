import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import i18n, { getStoredLocale, DEFAULT_LOCALE } from './i18n/index.js'
import './assets/main.css'

const app = createApp(App)
app.use(router)
app.use(i18n)
document.documentElement.lang = getStoredLocale() || DEFAULT_LOCALE
app.mount('#app')
