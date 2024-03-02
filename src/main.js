const { app, shell, dialog, Tray, Menu, nativeImage, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const fs = require('fs')
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
    frame: false,
    titleBarStyle: 'hidden',
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

// Assembly analysis
// const assemblyPath = path.join(__dirname, 'Assembly.dll')

// const analyzeAssembly = edge.func({
//   assemblyFile: path.join(__dirname, 'NFParser.dll'),
//   typeName: 'AssemblyParser',
//   methodName: 'AnalyzeAssembly'
// })

// IPC events
ipcMain.handle('get-app-path', () => app.getAppPath())

ipcMain.handle('select-folder', () => {
  const result = dialog.showOpenDialogSync({
    properties: ['openDirectory'],
    title: 'Select a folder',
    buttonLabel: 'Select',
    message: 'Select a folder',
    defaultPath: app.getPath('desktop')
  })

  if (result) {
    return result[0]
  }
})

// Title bar icons
ipcMain.on('close-window', () => {
  BrowserWindow.getFocusedWindow()?.close()
})

ipcMain.on('minimize-window', () => {
  BrowserWindow.getFocusedWindow()?.minimize()
})

ipcMain.on('maximize-window', () => {
  const window = BrowserWindow.getFocusedWindow()
  if (window) {
    window.isMaximized() ? window.restore() : window.maximize()
  }
})

ipcMain.on('open-dev-tools', () => {
  BrowserWindow.getFocusedWindow()?.webContents.openDevTools()
})

ipcMain.on('open-help', () => {
  shell.openExternal('https://github.com/satoru8/NFModTool')
})

// Creates a system tray icon
let tray

const createTray = () => {
  // const iconPath = path.join(app.getAppPath(), './public/logo.png')
  const iconPath = fileURLToPath(new URL('../renderer/logo.png', import.meta.url))
  const icon = nativeImage.createFromPath(iconPath)
  tray = new Tray(icon)

  console.log('Tray icon path:', iconPath)

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

// Settings
const SETTINGS_FILE = path.join(app.getPath('userData'), 'settings.json')

function saveSettings(settings) {
  fs.writeFileSync(SETTINGS_FILE, JSON.stringify(settings, null, 2), 'utf8')
}

ipcMain.on('save-settings', (event, settings) => {
  saveSettings(settings)
})

ipcMain.handle('load-settings', async () => {
  if (fs.existsSync(SETTINGS_FILE)) {
    return JSON.parse(fs.readFileSync(SETTINGS_FILE, 'utf8'))
  }
  return {}
})

// File Manager
ipcMain.handle('read-directory', async (event, itemPath) => {
  try {
    if (!fs.existsSync(itemPath)) {
      throw new Error(`Item does not exist: ${itemPath}`)
    }
    const files = await fs.promises.readdir(itemPath, { withFileTypes: true })
    const transformedFiles = await Promise.all(
      files.map(async (file) => {
        const isDirectory = file.isDirectory()
        const name = file.name
        const fullPath = path.join(itemPath, name)

        if (isDirectory) {
          const nodes = await readDirectoryRecursively(fullPath)
          return { name, isDirectory, fullPath, nodes }
        } else {
          return { name, isDirectory: false, fullPath }
        }
      })
    )

    return transformedFiles.flat() || []
  } catch (error) {
    console.error('Failed to read directory:', error)
    throw error
  }
})

async function readDirectoryRecursively(directoryPath) {
  const files = await fs.promises.readdir(directoryPath, { withFileTypes: true })
  const transformedFiles = await Promise.all(
    files.map(async (file) => {
      const isDirectory = file.isDirectory()
      const name = file.name
      const icon = isDirectory ? '📁' : '📄'
      const fullPath = path.join(directoryPath, name)

      if (isDirectory) {
        const nodes = await readDirectoryRecursively(fullPath)
        return { name, isDirectory, nodes, icon }
      } else {
        return { name, isDirectory: false, fullPath, icon }
      }
    })
  )

  transformedFiles
    .filter((result) => result.status === 'fulfilled')
    .map((result) => result.value)
    .flat() || []

  return transformedFiles
}

ipcMain.handle('read-file-content', async (event, filePath) => {
  try {
    const fileContent = await fs.promises.readFile(filePath, 'utf-8')
    return fileContent
  } catch (error) {
    console.error('Failed to read file content:', error)
    throw error
  }
})

app.whenReady().then(async () => {
  createTray()

  mainWindow.webContents.openDevTools()

  ipcMain.on('renderer-ready', () => {
    mainWindow.webContents.send('loading-done')
  })

  // analyzeAssembly(assemblyPath, true, (error, result) => {
  //   if (error) {
  //     console.error('Assembly Analysis Error:', error)
  //     return
  //   }
  //   // Result will be an array of objects (if parsing is successful)
  //   console.log('Found Classes:', result)

  //   // Example of accessing analyzed data
  //   for (const classInfo of result) {
  //     console.log('Class: ', classInfo.ClassName)
  //     console.log('Properties: ', classInfo.Properties)
  //   }
  // })
})

app.setName('NF Mod Tool')
