<template>
  <div id="midPanel">
    <div class="midPanelInner">
      <EditorTabs
        show-arrows
        stacked
        :tabs="tabs"
        :activeTab="activeTab"
        @switchTab="switchTab"
        @addTab="addTab"
      />
      <div class="editorContainer" ref="editorContainer"></div>
    </div>
  </div>
</template>

<script>
import EditorTabs from '../components/editorTabs.vue'
import { createEditor } from '../js/monacoSetup.js'
import { editorManager } from '../js/editorManager'

export default {
  name: 'OctdatEditor',
  components: {
    EditorTabs
  },
  data() {
    return {
      tabs: [{ id: 'tab1', name: 'Tab 1', active: true }],
      activeTab: 'tab1',
      editorsInitialized: false
    }
  },
  methods: {
    switchTab(tabId) {
      this.activeTab = tabId
      this.updateEditorVisibility()
    },
    async addTab() {
      const newTabId = 'tab' + (this.tabs.length + 1)
      this.tabs.push({
        id: newTabId,
        name: 'Tab ' + (this.tabs.length + 1),
        active: false
      })
      await this.initializeEditor(newTabId)
      this.switchTab(newTabId)
    },
    updateEditorVisibility() {
      const activeTabId = this.activeTab
      editorManager.getEditorIds().forEach((id) => {
        const editor = editorManager.getEditor(id)

        if (editor) {
          const containerId = `editorContainer-${id}`
          const container = document.getElementById(containerId)

          if (container) {
            const displayStyle = id === activeTabId ? 'block' : 'none'
            container.style.display = displayStyle
          } else {
            console.error(`Container element not found for tab ${id}`)
          }
        } else {
          console.error(`Editor instance is undefined for tab ${id}`)
        }
      })
    },
    async initializeEditor(tabId) {
      let editor = editorManager.getEditor(tabId)

      if (!editor) {
        const containerId = `editorContainer-${tabId}`
        let container = document.getElementById(containerId)

        if (!container) {
          container = document.createElement('div')
          container.id = containerId
          container.className = 'editorContainer'
          this.$refs.editorContainer.appendChild(container)
        }

        editor = await createEditor(container, {}, tabId)
        editorManager.addEditor(tabId, editor)
      }

      if (!this.editorsInitialized) {
        this.editorsInitialized = true
        this.updateEditorVisibility()
      }
    }
  },
  async mounted() {
    await this.initializeEditor(this.activeTab)
  },
  beforeUnmount() {
    editorManager.getEditorIds().forEach((editorId) => {
      editorManager.removeEditor(editorId)
    })
  }
}
</script>
