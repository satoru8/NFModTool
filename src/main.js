const { app, BrowserWindow } = require('electron')
const path = require('path')
import { fileURLToPath } from 'url'
// const edge = require('electron-edge-js')

// Quit the app when Squirrel is performing the installation/update process.
if (require('electron-squirrel-startup')) {
  app.quit()
}

let mainWindow

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    minWidth: 1000,
    minHeight: 800,
    // frame: false,
    //  titleBarStyle: 'hidden',
    icon: fileURLToPath(new URL('../renderer/logo.png', import.meta.url)),
    webPreferences: {
      preload: fileURLToPath(new URL('../preload/index.js', import.meta.url))
    }
  })

  if (!app.isPackaged && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(path.join(__dirname, '../renderer/index.html'))
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
