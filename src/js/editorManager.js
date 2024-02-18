class EditorManager {
  constructor() {
    this.editors = new Map()
  }

  addEditor(id, editorInstance) {
    this.editors.set(id, editorInstance)
  }

  getEditor(id) {
    return this.editors.get(id)
  }

  removeEditor(id) {
    const editor = this.editors.get(id);
    if (editor) {
      editor.dispose();
      this.editors.delete(id);
    }
  }

  updateEditorOptions(editor, newOptions) {
    editor.updateOptions(newOptions)
  }

  getEditorIds() {
    return [...this.editors.keys()];
  }

  getEditorCount() {
    return this.editors.size;
  }
}

export const editorManager = new EditorManager()