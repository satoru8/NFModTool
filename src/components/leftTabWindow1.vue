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
        prepend-inner-icon="mdi-magnify"
        color="secondary"
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

const fileTree = ref([])
const searchText = ref('')
const indentSize = ref(5)
const gap = ref(0)

defineEmits(['nodeExpanded', 'update:nodes', 'nodeClick'])

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

// const onNodeExpanded = (node, state) => {
//   console.log('onExpanded State: ', state)
//   console.log('onExpanded Node: ', node)
// }

const onUpdate = (nodes) => {
  console.log('onUpdate:', nodes)
}

const onNodeClick = async (node) => {
  if (node.isDirectory || !isValidFile(node)) {
    return
  }

  try {
    const fileContent = await window.electronAPI.readFileContent(node.path)

    window.electronAPI.sendOpenFileInEditor({
      id: node.label,
      label: node.label,
      content: fileContent
    })

    console.log('File to be opened:', node.label)
  } catch (error) {
    console.error('Error reading file content:', error)
  }
}

const isValidFile = (node) => {
  const fileExtension = node.label.toLowerCase()
  return /\.(octdat|octdat\.bak|info)$/.test(fileExtension)
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
      icon: file.isDirectory ? 'mdi-folder' : 'mdi-file',
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
