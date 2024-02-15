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

// Normal loading
import { createApp } from 'vue';
import TitleBar from './components/titleBar.vue';
import MainView from './views/mainView.vue';
import './css/main.css'

const titleBar = createApp(TitleBar);
titleBar.mount('#titleBar');

const appMain = createApp(MainView);
appMain.mount('#appMain');

console.log('%cNF Mod Tool', 'color: #ae00ff; font-size: 20px; font-weight: bold');




// import { createApp } from 'vue'
// import TitleBar from './components/titleBar.vue'
// import MainView from './views/mainView.vue'
// import './css/main.css'

// import 'vuetify/styles'
// import { createVuetify } from 'vuetify'
// import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'

// const vuetify = createVuetify({
//   components,
//   directives,
// })

// createApp(TitleBar).mount('#titleBar')
// createApp(MainView).use(vuetify).mount('#appMain')

// console.log('%cNF Mod Tool', 'color: #ae00ff; font-size: 20px; font-weight: bold')



// import { createApp } from 'vue';
// import TitleBar from './components/titleBar.vue';
// import MainView from './views/mainView.vue';
// import vuetify from './plugins/vuetify';

// const titleBar = createApp(TitleBar);
// titleBar.use(vuetify);
// titleBar.mount('#titleBar');

// const appMain = createApp(MainView);
// appMain.use(vuetify);
// appMain.mount('#appMain');

// console.log('%cNF Mod Tool', 'color: #ae00ff; font-size: 20px; font-weight: bold');
