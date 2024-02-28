const { contextBridge, ipcRenderer } = require('electron')

/**
 *  This allows you to communicate with the main process.
 * @see https://www.electronjs.org/docs/latest/tutorial/tutorial-preload
 * @see https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
 * @see https://www.electronjs.org/docs/latest/api/context-bridge
 * @see https://www.electronjs.org/docs/latest/api/ipc-renderer
 */
contextBridge.exposeInMainWorld('electronAPI', {
  closeWindow: () => ipcRenderer.send('close-window'),
  minimizeWindow: () => ipcRenderer.send('minimize-window'),
  maximizeWindow: () => ipcRenderer.send('maximize-window'),
  openDevTools: () => ipcRenderer.send('open-dev-tools'),
  openHelp: () => ipcRenderer.send('open-help'),
  loadingDone: (callback) => ipcRenderer.on('loading-done', callback),
  rendererReady: () => ipcRenderer.send('renderer-ready'),
  saveSettings: (settings) => ipcRenderer.send('save-settings', settings),
  loadSettings: () => ipcRenderer.invoke('load-settings'),
  getAppPath: () => ipcRenderer.invoke('get-app-path'),
  fetchFiles: (path) => ipcRenderer.invoke('read-directory', path),
  selectFolder: () => ipcRenderer.invoke('select-folder')
})
