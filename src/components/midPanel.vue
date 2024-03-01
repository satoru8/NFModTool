<template>
  <div id="midPanel">
    <div class="midPanelInner">
      <EditorTabs
        :tabs="tabs"
        :activeTab="activeTab"
        @switchTab="handleSwitchTab"
        @addTab="addTab"
        @removeTab="removeTab"
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

const removeTab = (tabId) => {
  const index = tabs.value.findIndex((tab) => tab.id === tabId)
  if (index !== -1) {
    tabs.value.splice(index, 1)
    if (activeTab.value === tabId) {
      activeTab.value = tabs.value[0].id
      editorManager.removeEditor(tabId)
      updateEditorVisibility()
    }
  }
}

onMounted(async () => {
  await initializeEditor(activeTab.value)
})

const switchTab = (tabId) => {
  activeTab.value = tabId
  updateEditorVisibility()
}

const handleSwitchTab = (tabId) => {
  switchTab(tabId)
}

const addTab = async () => {
  const newTabId = 'tab' + (tabs.value.length + 1)
  tabs.value.push({
    id: newTabId,
    name: 'Tab ' + (tabs.value.length + 1),
    active: false
  })
  await initializeEditor(newTabId)
  switchTab(newTabId)
}

const updateEditorVisibility = () => {
  const activeTabId = activeTab.value
  editorManager.getAllEditorIds().forEach((id) => {
    const editor = editorManager.getEditorById(id)
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

const initializeEditor = async (tabId) => {
  let editor = editorManager.getEditorById(tabId)
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
  editorManager.getAllEditorIds().forEach((editorId) => {
    editorManager.removeEditor(editorId)
  })
})
</script>
