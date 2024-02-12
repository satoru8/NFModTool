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
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 */
import './css/index.css';
// import './js/monacoSetup.js';
import { createApp } from 'vue';
import TopPanel from './topPanel.vue';
import LeftPanel from './leftPanel.vue';
import MidPanel from './midPanel.vue';
import RightPanel from './rightPanel.vue';


createApp(TopPanel).mount('#topPanel');
createApp(LeftPanel).mount('#leftPanel');
createApp(MidPanel).mount('#midPanel');
createApp(RightPanel).mount('#rightPanel');

console.log('%cNF Mod Tool', 'color: #ae00ff; font-size: 20px; font-weight: bold');