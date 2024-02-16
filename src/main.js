const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
// const fs = require('fs') 
// const edge = require('edge-js')

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit()
}

const createWindow = () => {
  const mainWindow = new BrowserWindow({
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
    icon: path.join(__dirname, './public/logo.png'),
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

  mainWindow.webContents.openDevTools()
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

ipcMain.on('close-window', () => {
  const window = BrowserWindow.getFocusedWindow()
  if (window) window.close()
})

ipcMain.on('minimize-window', () => {
  const window = BrowserWindow.getFocusedWindow()
  if (window) window.minimize()
})

ipcMain.on('maximize-window', () => {
  const window = BrowserWindow.getFocusedWindow()
  if (window) {
    window.isMaximized() ? window.unmaximize() : window.maximize()
  }
})

// Assembly analysis
// const assemblyPath = path.join(__dirname, 'Assembly.dll');

// const analyzeAssembly = edge.func({
//     assemblyFile: path.join(__dirname, './src/NFParser.dll'), 
//     typeName: 'AssemblyParser.AssemblyParser',
//     methodName: 'AnalyzeAssembly' 
// });

// app.whenReady().then(async () => {
//   try {
//       const classes = await analyzeAssembly(assemblyPath, true); 
      
//       // Log the parsed data
//       console.log(classes); 

//       // Data utilization logic (database operations, further processing, etc.)

//   } catch (error) {
//       console.error("Error analyzing assembly:", error);
//   }
// });