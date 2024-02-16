const { app, Tray, Menu, nativeImage, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
// const fs = require('fs')
const edge = require('electron-edge-js');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit()
}

let mainWindow

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    frame: false,
    titleBarStyle: 'hidden',
    // titleBarOverlay: {
    //   color: '#2f3241',
    //   symbolColor: '#52c073',
    //   height: 20,
    // },
    icon: path.join(__dirname, './logo.png'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // eslint-disable-next-line no-undef
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    // eslint-disable-next-line no-undef
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL)
  } else {
    // eslint-disable-next-line no-undef
    mainWindow.loadFile(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`))
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

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

// Title bar icons
function closeWindow() {
  const window = BrowserWindow.getFocusedWindow()
  if (window) {
    try {
      window.close()
    } catch (error) {
      console.error('Error closing window:', error)
    }
  }
}

ipcMain.on('close-window', closeWindow)

ipcMain.on('minimize-window', () => {
  const window = BrowserWindow.getFocusedWindow()
  if (window) window.minimize()
})

ipcMain.on('maximize-window', () => {
  const window = BrowserWindow.getFocusedWindow()
  if (window) {
    if (window.isMaximized()) {
      window.restore()
    } else {
      window.maximize()
    }
  }
})

// Creates a system tray icon
let tray

const createTray = () => {
  const iconPath = path.join(__dirname, './logo.png')
  const icon = nativeImage.createFromPath(iconPath)
  tray = new Tray(icon)

  const contextMenu = Menu.buildFromTemplate([
    { label: 'Open', click: () => mainWindow && mainWindow.show() },
    { label: 'Quit', click: () => app.quit() }
  ])

  tray.setContextMenu(contextMenu)
  tray.setToolTip('NF Mod Tool')
  tray.setTitle('NF Mod Tool')

  tray.on('click', () => {
    if (mainWindow) {
      if (mainWindow.isVisible()) {
        if (mainWindow.isFocused()) {
          mainWindow.minimize()
        } else {
          mainWindow.focus()
        }
      } else {
        mainWindow.show()
      }
    }
  })
}

app.whenReady().then(async () => {
  createTray()
  mainWindow.webContents.openDevTools()

  analyzeAssembly(assemblyPath, true, (error, result) => {
    if (error) {
      console.error("Assembly Analysis Error:", error);
      return;
    }
    // Result will be an array of objects (if parsing is successful)
    console.log("Found Classes:", result);

    // Example of accessing analyzed data
    for (const classInfo of result) {
      console.log('Class: ', classInfo.ClassName);
      console.log('Properties: ', classInfo.Properties);
    }
  });

})

// Assembly analysis
const assemblyPath = path.join(__dirname, 'Assembly.dll');

const analyzeAssembly = edge.func({
  assemblyFile: path.join(__dirname, 'NFParser.dll'),
  typeName: 'AssemblyParser',
  methodName: 'AnalyzeAssembly'
});