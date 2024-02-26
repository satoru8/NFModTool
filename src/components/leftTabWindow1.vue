<template>
  <v-card flat class="leftPanelCard">
    <v-card-text>
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
        v-if="fileTree.length"
        v-model:nodes="fileTree"
        :search-text="searchText"
        @nodeExpanded="onNodeExpanded"
        @update:nodes="onUpdate"
        @nodeClick="onNodeClick"
        showChildCount
      />
    </v-card-text>
  </v-card>
</template>

<script>
import { ref, onMounted } from 'vue'
import Tree from 'vue3-tree'
import 'vue3-tree/dist/style.css'
import { editorManager } from '../js/editorManager'

export default {
  name: 'Tab1Content',
  components: {
    Tree
  },
  data() {
    return {
      searchText: ''
    }
  },
  methods: {
    readFile(node) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const fileContent = event.target.result
        this.$emit('fileChanged', fileContent)
      }
      reader.readAsText(node)
    }
  },
  setup() {
    const fileTree = ref([])
    const searchText = ref('')

    // const fetchFilesAndTransform = async () => {
    //   try {
    //     const appPath = await window.electronAPI.getAppPath()
    //     const contentPath = '\\src\\'
    //     const filePath = appPath + contentPath

    //     console.log('File path:', filePath)
    //     const files = await window.electronAPI.fetchFiles(filePath)
    //     const transformed = transformFileStructureToTree(files)
    //     fileTree.value = transformed
    //     console.log('File tree:', fileTree.value)
    //   } catch (error) {
    //     console.error('Failed to fetch files:', error)
    //   }
    // }

    const fetchFilesAndTransform = async () => {
      try {
        const appPath = await window.electronAPI.getAppPath()
        const contentPath = '\\src\\'
        const filePath = appPath + contentPath

        const files = await window.electronAPI.fetchFiles(filePath)
        const rootFolder = {
          name: contentPath,

          label: contentPath,
          path: filePath,

          expandable: true,
          isDirectory: true,
          children: files
        }

        const transformed = transformFileStructureToTree([rootFolder])
        fileTree.value = transformed
        console.log('File tree:', fileTree.value)
      } catch (error) {
        console.error('Failed to fetch files:', error)
      }
    }

    onMounted(() => {
      fetchFilesAndTransform()
    })

    const onNodeExpanded = (node, state) => {
      console.log('onExpanded State: ', state)
      console.log('onExpanded Node: ', node)
    }

    const onUpdate = (nodes) => {
      console.log('onUpdate:', nodes)
    }

    const onNodeClick = (node) => {
      console.log('Node clicked: ', node)
      
      if (node.isDirectory) {
        // expand the node
        node.expanded = true
      }
    }

    return {
      fileTree,
      searchText,
      fetchFilesAndTransform,
      onNodeExpanded,
      onNodeClick,
      onUpdate
    }
  }
}
function transformFileStructureToTree(files, parentPath = '') {
  if (!files || files.length === 0) {
    console.error('Files are undefined or empty.')
    return
  }

  const transformedFiles = files
    .filter((file) => !file.error)
    .map((file) => {
      const path = parentPath + '/' + file.name

      const node = {
        label: file.name,
        path: path,
        isDirectory: file.isDirectory,
        expandable: file.isDirectory
      }

      if (file.isDirectory && file.children) {
        node.children = transformFileStructureToTree(file.children, path)
      }

      return node
    })

  return transformedFiles
}
</script>
