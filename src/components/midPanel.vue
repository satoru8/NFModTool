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
import { storeToRefs } from 'pinia'
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { useEditorStore } from '../js/editorStore'
import EditorTabs from '../components/editorTabs.vue'
import { editorManager } from '../js/editorManager'

const editorContainer = ref(null)
const store = useEditorStore()

const tabs = ref([])
const activeTab = ref('')
const { addTab, switchTab } = store

const { tabs: tabsState, activeTab: activeTabState } = storeToRefs(store)

const handleSwitchTab = (tabId) => {
  switchTab(tabId)
}

onMounted(() => {
  store.initializeEditors(editorContainer.value, handleSwitchTab)

  tabs.value = tabsState.value
  activeTab.value = activeTabState.value

  if (tabs.value.length > 0) {
    switchTab(tabs.value[0].id)
  }
})

onBeforeUnmount(() => {
  editorManager.dispose()
})
</script>
