/**
 * This file will automatically be loaded by vite and run in the "renderer" context.
 * @see https://www.electronjs.org/docs/latest/tutorial/process-model#renderer-process
 * @see https://electronjs.org/docs/tutorial/security
 */

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import MainView from './views/mainView.vue'
import vuetify from './js/vuetify'
import './css/main.css'
import chalk from 'chalk'

const pinia = createPinia()
const appMain = createApp(MainView)
appMain.use(pinia)
appMain.use(vuetify)
appMain.mount('#mainBody')

console.log(chalk.bold.magenta('NF Mod Tool: ') + chalk.blueBright('Renderer process ready!'))

if (window.nfAPI) {
  window.nfAPI.receiveLogMessage((event, message, error) => {
    Logger.log(error ? 'error' : 'info', message, error)
  })
}
