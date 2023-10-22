import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { VueFire, VueFireAuth } from 'vuefire'

import App from './App.vue'
import router from './router'
import { firebaseApp } from './firebase/config'
import { BiGithub, BiGoogle } from 'oh-vue-icons/icons'

const app = createApp(App)

addIcons(BiGoogle, BiGithub)

app.use(createPinia())
app.use(router)
app.use(VueFire, { firebaseApp, modules: [VueFireAuth()] })
app.component('v-icon', OhVueIcon)
app.mount('#app')
