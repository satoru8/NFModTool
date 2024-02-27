<template>
  <v-card flat class="leftPanelCard fileManager">
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
        :indentSize="indentSize"
        :gap="gap"
        rowHoverBackground="#a8a8a831"
        @nodeExpanded="onNodeExpanded"
        @update:nodes="onUpdate"
        @nodeClick="onNodeClick"
        showChildCount
      />
    </v-card-text>
  </v-card>
</template>

<script>
import { ref } from 'vue'
import Tree from 'vue3-tree'
import 'vue3-tree/dist/style.css'
import { editorManager } from '../js/editorManager'

export default {
  name: 'Tab1Content',
  components: {
    Tree
  },

  props: {
    gap: {
      type: Number,
      default: 0
    },
    indentSize: {
      type: Number,
      default: 6
    }
  },
  data() {
    return {
      searchText: ''
    }
  },
  methods: {
    async selectDir() {
      await this.fetchFilesAndTransform()
    }
  },
  setup() {
    const fileTree = ref([])

    const fetchFilesAndTransform = async function () {
      try {
        const filePath = await window.electronAPI.selectFolder()
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

      const activeEditorId = editorManager.getActiveEditorId()

      if (activeEditorId !== null) {
        const editor = editorManager.getEditor(activeEditorId)

        if (editor) {
          const fileContent = window.electronAPI.readFileContent(node.path)

          if (fileContent) {
            console.log('File content:', fileContent)
          }
        } else {
          console.error(`Editor with ID ${activeEditorId} not found.`)
        }
      } else {
        console.log('Editor IDs:', editorManager.getActiveEditorId())
        console.error('No active editor found.')
      }
    }

    return {
      fileTree,
      fetchFilesAndTransform,
      onNodeExpanded,
      onNodeClick,
      onUpdate
    }
  }
}
function transformFileStructureToTree(files, parentPath = '') {
  if (!files || files.length === 0) {
    return []
  }

  const tree = files.map((file) => {
    const path = `${parentPath}${file.name}`
    const node = {
      label: file.name,
      path: path,
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
