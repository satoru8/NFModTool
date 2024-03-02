import { createEditor } from './monacoSetup'

class EditorManager {
  constructor() {
    this.editors = new Map()
  }

  addEditor(id, editorInstance) {
    if (this.editors.has(id)) {
      console.warn(`Editor with id ${id} already exists.`)
    } else {
      this.editors.set(id, editorInstance)
    }
  }

  removeEditor(id) {
    const editor = this.editors.get(id)
    if (editor) {
      editor.dispose()
      this.editors.delete(id)
    }
  }

  clearAllEditors() {
    this.editors.forEach((editor) => editor.dispose())
    this.editors.clear()
  }

  getAllEditors() {
    return this.editors
  }

  getAllEditorsAsArray() {
    return Array.from(this.editors.values())
  }

  getEditorById(id) {
    return this.editors.get(id)
  }

  getAllEditorIds() {
    return Array.from(this.editors.keys())
  }

  getEditorCount() {
    return this.editors.size
  }

  updateEditorVisibility(activeTabId) {
    this.getAllEditorIds().forEach((id) => {
      const editor = this.getEditorById(id)
      if (editor) {
        const containerId = `editorContainer-${id}`
        const container = document.getElementById(containerId)
        if (container) {
          const displayStyle = id === activeTabId ? 'block' : 'none'
          container.style.display = displayStyle

          if (id === activeTabId) {
            editor.focus()
          }
        } else {
          console.error(`Container element not found for tab ${id}`)
        }
      } else {
        console.error(`Editor instance is undefined for tab ${id}`)
      }
    })
  }

  async initializeEditor(tabId, editorContainer) {
    let editor = this.getEditorById(tabId)
    if (!editor) {
      const containerId = `editorContainer-${tabId}`
      let container = document.getElementById(containerId)
      if (!container) {
        container = document.createElement('div')
        container.id = containerId
        container.className = 'editorContainer'
        editorContainer.appendChild(container)
      }
      editor = await createEditor(container, {}, tabId)
      // this.addEditor(tabId, editor)
    }
  }
}

export const editorManager = new EditorManager()