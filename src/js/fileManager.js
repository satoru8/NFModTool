class FileManager {
  constructor() {
    this.fileTree = []
    this.searchText = ''
    this.indentSize = 5
    this.gap = 0
  }

  async loadFolderPathFromSettings(settingKey, fetchFilesAndTransform) {
    try {
      const settings = await window.nfAPI.loadSettings()
      const initialFolderPath = settings[settingKey] || ''
      if (initialFolderPath) {
        await fetchFilesAndTransform(initialFolderPath)
      }
    } catch (error) {
      console.error('Failed to load folder path from settings:', error)
    }
  }

  transformFileStructureToTree(files, parentPath = '') {
    if (!files || files.length === 0) {
      return []
    }

    files.sort((a, b) => {
      if (a.isDirectory === b.isDirectory) {
        return a.name.localeCompare(b.name)
      }
      if (a.isDirectory && !b.isDirectory) {
        return -1
      }
      return 1
    })

    const tree = files.map((file) => {
      const path = `${parentPath}${file.name}`
      const node = {
        label: file.name,
        path: file.fullPath,
        isDirectory: file.isDirectory,
        expandable: file.isDirectory,
        icon: file.isDirectory ? 'mdi-folder' : 'mdi-file',
        nodes: file.isDirectory ? [] : null
      }

      if (file.isDirectory && file.nodes) {
        node.nodes = this.transformFileStructureToTree(file.nodes, `${path}/`)
      }

      return node
    })

    return tree
  }

  async fetchFilesAndTransform(filePath) {
    try {
      const files = await window.nfAPI.fetchFiles(filePath)
      const rootFolder = {
        name: filePath.split('\\').pop(),
        path: filePath,
        expandable: true,
        isDirectory: true,
        nodes: files
      }
      const transformed = this.transformFileStructureToTree([rootFolder])
      this.fileTree = transformed
    } catch (error) {
      console.error('Failed to fetch files:', error)
    }
  }

  async onNodeClick(node) {
    if (node.isDirectory || !this.isValidFile(node)) {
      return
    }

    try {
      const fileContent = await window.nfAPI.readFileContent(node.path)
      window.nfAPI.sendOpenFileInEditor({
        id: node.label,
        label: node.label,
        content: fileContent
      })
      console.log('File to be opened:', node.label)
    } catch (error) {
      console.error('Error reading file content:', error)
    }
  }

  isValidFile(node) {
    const fileExtension = node.label.toLowerCase()
    return /\.(octdat|octdat\.bak|info)$/.test(fileExtension)
  }
}

export const fileManager = new FileManager()
