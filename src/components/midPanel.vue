<template>
  <div id="midPanel">
    <div class="midPanelInner">
      <EditorTabs
        :tabs="tabs"
        :activeTab="activeTab"
        @switchTab="handleSwitchTab"
        @addTab="addTab"
        @removeTab="removeTab"
        @openFileInEditor="addTabWithContent"
      />
      <div class="editorContainer" ref="editorContainer"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import EditorTabs from '../components/editorTabs.vue'
import { editorManager } from '../js/editorManager'

const tabs = ref([])
const activeTab = ref('')
const editorContainer = ref(null)

const removeTab = (tabId) => {
  console.log('Removing Tab:', tabId)
  const tabToRemoveIndex = tabs.value.findIndex((tab) => tab.id === tabId)

  if (tabToRemoveIndex !== -1) {
    editorManager.removeEditor(tabId)
    tabs.value.splice(tabToRemoveIndex, 1)

    if (activeTab.value === tabId) {
      const newActiveTabIndex = tabToRemoveIndex > 0 ? tabToRemoveIndex - 1 : 0
      const newActiveTab = tabs.value[newActiveTabIndex]

      if (newActiveTab) {
        handleSwitchTab(newActiveTab.id)
      } else {
        activeTab.value = ''
        editorManager.clearAllEditors()
        console.log('No tabs left. Clearing all editors.')
      }
    }
  }
}

const handleSwitchTab = (tabId) => {
  if (activeTab.value !== tabId) {
    activeTab.value = tabId
    tabs.value.forEach((tab) => (tab.active = tab.id === tabId))
    editorManager.updateEditorVisibility(tabId)
    console.log('Switching Tab:', tabId)
  }
}

const addTabWithContent = async (tabId, tabName, content) => {
  const existingTab = tabs.value.find((tab) => tab.id === tabId)

  if (!existingTab) {
    tabs.value.push({
      id: tabId,
      name: tabName,
      active: false
    })

    await editorManager.initializeEditor(tabId, editorContainer.value, content)
    handleSwitchTab(tabId)
  } else {
    handleSwitchTab(tabId)
  }
}

const addTab = async () => {
  const newTabId = `tab${tabs.value.length + 1}`
  tabs.value.push({
    id: newTabId,
    name: `Tab ${tabs.value.length + 1}`,
    active: false
  })

  await editorManager.initializeEditor(newTabId, editorContainer.value)
  handleSwitchTab(newTabId)
}

onMounted(() => {
  window.electronAPI.onOpenFileInEditor((data) => {
    if (data && typeof data === 'object') {
      if (data.id && data.label && data.content) {
        addTabWithContent(data.id, data.label, data.content)
      } else {
        console.error('Invalid data structure. Expected properties: id, label, content')
      }
    } else {
      console.error('Invalid data received:', data)
    }
  })
})

onBeforeUnmount(() => {
  editorManager.clearAllEditors()
})
</script>
