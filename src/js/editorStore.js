// editorStore.js
import { defineStore } from 'pinia'
import { createEditor } from './monacoSetup'
import { editorManager } from './editorManager'

export const useEditorStore = defineStore('editor', {
  state: () => ({
    tabs: [{ id: 'tab1', name: 'Tab 1', active: true }],
    activeTab: 'tab1',
    editorsInitialized: false,
    editors: {}
  }),
  actions: {
    async initializeEditor(tabId) {
      let editor = editorManager.getEditor(tabId)

      if (!editor) {
        const container = await this.createEditorContainer(tabId)
        editor = await createEditor(container, {}, tabId)
        editorManager.addEditor(tabId, editor)
      }

      this.updateInitializationState()
      this.editors[tabId] = editor

      return editor
    },
    async createEditorContainer(tabId) {
      const containerId = `editorInstance-${tabId}`
      let container = document.getElementById(containerId)

      if (!container) {
        container = document.createElement('div')
        container.id = containerId
        container.className = 'editorContainer'
        this.$emit('createContainer', container)
      }

      return container
    },
    updateInitializationState() {
      if (!this.editorsInitialized) {
        this.editorsInitialized = true
        this.updateEditorVisibility()
      }
    },
    destroyEditor(tabId) {
      if (this.editors[tabId]) {
        this.editors[tabId].dispose()
        editorManager.removeEditor(tabId)
      }
    },
    switchTab(tabId) {
      this.activeTab = tabId
    },
    addTab() {
      const newTabId = `tab${this.tabs.length + 1}`
      this.tabs.push({
        id: newTabId,
        name: `Tab ${this.tabs.length + 1}`,
        active: false
      })
      this.activeTab = newTabId
      // Initialization of the editor will happen in the component
    }
  }
})
