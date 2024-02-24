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
    return [...this.editors.values()].find((editor) => editor.document.isDirty).id
  }

  getActiveEditor() {
    return [...this.editors.values()].find((editor) => editor.document.isDirty)
  }

  getEditorByUri(uri) {
    for (const editor of this.editors.values()) {
      if (editor.document.uri === uri) {
        return editor
      }
    }
  }

  removeEditor(id) {
    const editor = this.editors.get(id)
    if (editor) {
      editor.dispose()
      this.editors.delete(id)
    }
  }

  updateEditorOptions(editor, newOptions) {
    editor.updateOptions(newOptions)
  }

  getEditorIds() {
    return [...this.editors.keys()]
  }

  getEditorCount() {
    return this.editors.size
  }
}

export const editorManager = new EditorManager()
