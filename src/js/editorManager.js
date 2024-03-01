class EditorManager {
  constructor() {
    this.editors = new Map()
  }

  getAllEditors() {
    return this.editors
  }

  addEditor(id, editorInstance) {
    this.editors.set(id, editorInstance)
  }

  getEditor(id) {
    return this.editors.get(id)
  }

  getActiveEditorId() {
    const activeEditor = Array.from(this.editors.values()).find(
      (editor) => editor.document?.isDirty
    )
    return activeEditor?.id || null
  }

  getActiveEditor() {
    return Array.from(this.editors.values()).find((editor) => editor.document?.isDirty)
  }

  getEditorByUri(uri) {
    return Array.from(this.editors.values()).find((editor) => editor.document?.uri === uri)
  }

  removeEditor(id) {
    const editor = this.editors.get(id)
    if (editor) {
      editor.dispose()
      this.editors.delete(id)
    }
  }

  clear() {
    this.editors.forEach((editor) => editor.dispose())
    this.editors.clear()
  }

  updateEditorOptions(editor, newOptions) {
    editor.updateOptions(newOptions)
  }

  getEditorIds() {
    return Array.from(this.editors.keys())
  }

  getEditorCount() {
    return this.editors.size
  }
}

export const editorManager = new EditorManager()
