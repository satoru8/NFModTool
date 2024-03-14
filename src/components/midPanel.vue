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
      <div class="editorContainer" ref="editorContainer">
        <div v-if="tabs.length === 0" class="h-100 d-flex text-center align-center justify-center">
          <v-card flat class="editorCard border pa-10">
            <v-icon size="100" color="primary" icon="mdi-file-document-edit-outline" />
            <v-card-title class="text-h4 text-blue-lighten-2">Octdat Editor</v-card-title>
            <v-card-text class="text-h5 text-blue-lighten-2">No active editors</v-card-text>
            <v-card-text class="text-h6 text-blue-lighten-2"
              >Open an editor to get started</v-card-text
            >
            <v-btn class="mt-5" color="primary" @click="addTab">Add Octdat</v-btn>
          </v-card>
        </div>
      </div>
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
    name: `NewOctdat`,
    active: false
  })

  await editorManager.initializeEditor(newTabId, editorContainer.value)
  handleSwitchTab(newTabId)
}

onMounted(() => {
  window.nfAPI.onOpenFileInEditor((data) => {
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
