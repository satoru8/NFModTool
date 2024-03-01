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
}

export const editorManager = new EditorManager()
