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
import { editorManager } from '../js/editorManager'

const tabs = ref([{ id: 'tab1', name: 'Tab 1', active: true }])
const activeTab = ref('tab1')
const editorContainer = ref(null)

const removeTab = (tabId) => {
  const index = tabs.value.findIndex((tab) => tab.id === tabId)
  if (index !== -1) {
    tabs.value.splice(index, 1)
    if (activeTab.value === tabId) {
      activeTab.value = tabs.value[0].id
      editorManager.removeEditor(tabId)
      editorManager.updateEditorVisibility(activeTab.value)
    }
  }
}

onMounted(async () => {
  await editorManager.initializeEditor(activeTab.value, editorContainer.value)
})

const switchTab = (tabId) => {
  activeTab.value = tabId
  editorManager.updateEditorVisibility(activeTab.value)
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
  await editorManager.initializeEditor(newTabId, editorContainer.value)
  switchTab(newTabId)
}

onBeforeUnmount(() => {
  editorManager.clearAllEditors()
})
</script>
