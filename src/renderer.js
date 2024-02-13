/**
 * This file will automatically be loaded by vite and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 */

import { createApp } from 'vue'
import TitleBar from './components/titleBar.vue'
import MainView from './views/mainView.vue'
import './css/main.css'

createApp(TitleBar).mount('#titleBar')
createApp(MainView).mount('#appMain')

console.log('%cNF Mod Tool', 'color: #ae00ff; font-size: 20px; font-weight: bold')