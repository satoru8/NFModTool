<template>
  <v-card flat class="leftPanelCard fileManager rounded-0">
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
        color="primary"
        density="compact"
        label="Search"
        variant="outlined"
        v-model="searchText"
        type="text"
        clearable
        single-line
      />
      <Tree
        class="fileManagerTree"
        v-if="fileTree.length"
        v-model:nodes="fileTree"
        :search-text="searchText"
        :indent-size="indentSize"
        :gap="gap"
        row-hover-background="#a8a8a831"
        @node-expanded="onNodeExpanded"
        @update:nodes="onUpdate"
        @node-click="onNodeClick"
        show-child-count
      />
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Tree from 'vue3-tree'
import 'vue3-tree/dist/style.css'
import { editorManager } from '../js/editorManager'

const fileTree = ref([])
const searchText = ref('')

defineProps(['indentSize', 'gap'])

onMounted(() => {
  loadFolderPathFromSettings()
})

const selectDir = async () => {
  try {
    const selectedFolderPath = await window.electronAPI.selectFolder()

    if (selectedFolderPath) {
      await fetchFilesAndTransform(selectedFolderPath)
    }
  } catch (error) {
    console.error('Failed to select folder:', error)
  }
}

const loadFolderPathFromSettings = async () => {
  try {
    const settings = await window.electronAPI.loadSettings()
    const initialFolderPath = settings.modFolderSetting || ''
    if (initialFolderPath) {
      await fetchFilesAndTransform(initialFolderPath)
    }
  } catch (error) {
    console.error('Failed to load folder path from settings:', error)
  }
}

const fetchFilesAndTransform = async (filePath) => {
  try {
    const files = await window.electronAPI.fetchFiles(filePath)
    const rootFolder = {
      name: filePath.split('\\').pop(),
      path: filePath,
      expandable: true,
      isDirectory: true,
      nodes: files
    }

    const transformed = transformFileStructureToTree([rootFolder])
    fileTree.value = transformed
  } catch (error) {
    console.error('Failed to fetch files:', error)
  }
}

const onNodeExpanded = (node, state) => {
  console.log('onExpanded State: ', state)
  console.log('onExpanded Node: ', node)
}

const onUpdate = (nodes) => {
  console.log('onUpdate:', nodes)
}

const onNodeClick = (node) => {
  if (node.isDirectory) {
    return
  }

  const editor = editorManager.getEditorById('tab1')

  if (editor) {
    const fileContent = window.electronAPI.readFileContent(node.path)
    console.log('Full Path:', node.path)
    if (fileContent) {
      editor.setValue(fileContent)
    }
  } else {
    console.error('No active editor found.')
  }
}

const transformFileStructureToTree = (files, parentPath = '') => {
  if (!files || files.length === 0) {
    return []
  }

  const tree = files.map((file) => {
    const path = `${parentPath}${file.name}`
    const node = {
      label: file.name,
      path: file.fullPath,
      isDirectory: file.isDirectory,
      expandable: file.isDirectory,
      nodes: file.isDirectory ? [] : null
    }

    if (file.isDirectory && file.nodes) {
      node.nodes = transformFileStructureToTree(file.nodes, `${path}/`)
    }

    return node
  })

  return tree
}
</script>
