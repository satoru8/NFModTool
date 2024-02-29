/**
 * This file will automatically be loaded by vite and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 *
 * @see https://www.electronjs.org/docs/latest/tutorial/process-model#renderer-process
 * @see https://electronjs.org/docs/tutorial/security
 *
 */

// Vuetify loading
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import MainView from './views/mainView.vue'
import vuetify from './js/vuetify'
import './css/main.css'

const pinia = createPinia()
const appMain = createApp(MainView)
appMain.use(pinia)
appMain.use(vuetify)
appMain.mount('#mainBody')

console.log('%cNF Mod Tool', 'color: #ae00ff; font-size: 20px; font-weight: bold')
window.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed')
})
