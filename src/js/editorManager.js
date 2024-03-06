import { createEditor } from './monacoSetup'

class EditorManager {
  constructor() {
    this.editors = new Map()
  }

  addEditor(id, editorInstance) {
    if (this.editors.has(id)) {
      console.warn(`Editor with id ${id} already exists. Skipping.`)
      return
    }
    this.editors.set(id, editorInstance)
  }

  removeEditor(id) {
    const editor = this.editors.get(id)
    if (!editor) {
      console.warn(`Editor with id ${id} does not exist.`)
      return
    }
    const containerId = `editorContainer-${id}`
    const container = document.getElementById(containerId)
    if (container) {
      editor.dispose()
      container.remove()
      this.editors.delete(id)
    }
  }

  clearAllEditors() {
    this.editors.forEach((editor) => editor.dispose())
    this.editors.clear()
  }

  getEditorById(id) {
    return this.editors.get(id)
  }

  getAllEditors() {
    if (this.editors.size === 0) {
      console.log('No editors found.')
      return
    }
    return this.editors
  }

  getAllEditorIds() {
    if (this.editors.size === 0) {
      console.log('No editors found.')
      return
    }
    const editorIds = Array.from(this.editors.keys())
    console.log(`Editor IDs: ${editorIds}`)
    return editorIds
  }

  getAllEditorsAsArray() {
    if (this.editors.size === 0) {
      console.log('No editors found.')
      return
    }
    const editorsArray = Array.from(this.editors.values())
    return editorsArray
  }

  getEditorCount() {
    return this.editors.size
  }

  updateEditorVisibility(activeTabId) {
    this.editors.forEach((editor, id) => {
      const containerId = `editorContainer-${id}`
      const container = document.getElementById(containerId)
      if (container) {
        container.style.display = id === activeTabId ? 'block' : 'none'
        if (id === activeTabId) {
          editor.focus()
        }
      }
    })
  }

  async initializeEditor(tabId, editorContainer, content = '') {
    if (this.editors.has(tabId)) {
      console.warn(`Editor for ${tabId} already initialized.`)
      return
    }

    const containerId = `editorContainer-${tabId}`
    let container = document.getElementById(containerId)

    if (!container) {
      container = document.createElement('div')
      container.id = containerId
      container.className = 'editorContainerInner'
      editorContainer.appendChild(container)
    }

    const editor = createEditor(container, {}, content)
    this.addEditor(tabId, editor)
  }
}
export const editorManager = new EditorManager()
