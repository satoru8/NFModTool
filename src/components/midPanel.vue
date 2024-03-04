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
import { ref, onBeforeUnmount } from 'vue'
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

onBeforeUnmount(() => {
  editorManager.clearAllEditors()
})
</script>
