const { contextBridge, ipcRenderer } = require('electron')

/**
 *  This allows you to communicate with the main process.
 * @returns {void}
 * @see https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
 * @see https://www.electronjs.org/docs/latest/api/context-bridge
 * @see https://www.electronjs.org/docs/latest/api/ipc-renderer
 */
contextBridge.exposeInMainWorld('electronAPI', {
  closeWindow: () => ipcRenderer.send('close-window'),
  minimizeWindow: () => ipcRenderer.send('minimize-window'),
  maximizeWindow: () => ipcRenderer.send('maximize-window'),
  loadingDone: (callback) => ipcRenderer.on('loading-done', callback),

/**
 * Sends data through the specified channel if it's valid.
 * Otherwise, it doesn't do anything. This is used to send data from the main process
 *
 * @param {string} channel - the channel to send data through
 * @param {any} data - the data to send
 */
  send: (channel, data) => {
    let validChannels = ['renderer-ready']; // Extend this list with more channels as needed
    if (validChannels.includes(channel)) {
      ipcRenderer.send(channel, data);
    }
  },
})

window.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed')
})
