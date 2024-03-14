<template>
  <v-card flat class="leftPanelCard fileManager rounded-0 overflow-auto">
    <v-card-text class="fileManagerInner">
      <v-btn
        block
        flat
        @click="selectDir"
        text="Select Folder"
        size="small"
        prepend-icon="mdi-folder"
        class="selectFolderBtn"
      />
      <v-text-field
        prepend-inner-icon="mdi-magnify"
        color="secondary"
        density="compact"
        label="Search"
        variant="outlined"
        v-model="searchText"
        clearable
      />
      <Tree
        class="fileManagerTree"
        v-if="fileTree.length"
        v-model:nodes="fileTree"
        :search-text="searchText"
        :indent-size="indentSize"
        :gap="gap"
        row-hover-background="#a8a8a831"
        @update:nodes="onUpdate"
        @nodeClick="onNodeClick"
        show-child-count
      />
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Tree from 'vue3-tree'
import 'vue3-tree/dist/style.css'
import { fileManager } from '../js/fileManager.js'

const props = defineProps({
  settingKey: {
    type: String,
    required: true
  }
})

const searchText = ref('')
const fileTree = ref([])
const indentSize = ref('')
const gap = ref('')
const settingKey = props.settingKey

const updateRefs = async () => {
  fileTree.value = fileManager.fileTree
  indentSize.value = fileManager.indentSize
  gap.value = fileManager.gap
}

onMounted(async () => {
  await fileManager.loadFolderPathFromSettings(
    settingKey,
    fileManager.fetchFilesAndTransform.bind(fileManager)
  )
  updateRefs()
})

const selectDir = async () => {
  try {
    const selectedFolderPath = await window.nfAPI.selectFolder()
    if (selectedFolderPath) {
      await fileManager.fetchFilesAndTransform(selectedFolderPath)
      updateRefs()
      console.log(selectedFolderPath)
    }
  } catch (error) {
    console.error('Failed to select folder:', error)
  }
}

const onUpdate = (nodes) => {
  console.log('onUpdate:', nodes)
}

const onNodeClick = async (node) => {
  await fileManager.onNodeClick(node)
}
</script>
