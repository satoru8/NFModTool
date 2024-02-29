<template>
  <div id="midPanel">
    <div class="midPanelInner">
      <EditorTabs
        show-arrows
        stacked
        :tabs="tabs"
        :activeTab="activeTab"
        @switchTab="handleSwitchTab"
        @addTab="addTab"
      />
      <div class="editorContainer" ref="editorContainer"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import EditorTabs from '../components/editorTabs.vue'
import { createEditor } from '../js/monacoSetup.js'
import { editorManager } from '../js/editorManager'

const tabs = ref([{ id: 'tab1', name: 'Tab 1', active: true }])
const activeTab = ref('tab1')
const editorsInitialized = ref(false)
const editorContainer = ref(null)

onMounted(async () => {
  await initializeEditor(activeTab.value)
})

function switchTab(tabId) {
  activeTab.value = tabId
  updateEditorVisibility()
}

function handleSwitchTab(tabId) {
  switchTab(tabId)
}

async function addTab() {
  const newTabId = 'tab' + (tabs.value.length + 1)
  tabs.value.push({
    id: newTabId,
    name: 'Tab ' + (tabs.value.length + 1),
    active: false
  })
  await initializeEditor(newTabId)
  switchTab(newTabId)
}

function updateEditorVisibility() {
  const activeTabId = activeTab.value
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
}

async function initializeEditor(tabId) {
  let editor = editorManager.getEditor(tabId)
  if (!editor) {
    const containerId = `editorContainer-${tabId}`
    let container = document.getElementById(containerId)
    if (!container) {
      container = document.createElement('div')
      container.id = containerId
      container.className = 'editorContainer'
      editorContainer.value.appendChild(container)
    }
    editor = await createEditor(container, {}, tabId)
    editorManager.addEditor(tabId, editor)
  }
  if (!editorsInitialized.value) {
    editorsInitialized.value = true
    updateEditorVisibility()
  }
}

onBeforeUnmount(() => {
  editorManager.getEditorIds().forEach((editorId) => {
    editorManager.removeEditor(editorId)
  })
})
</script>
