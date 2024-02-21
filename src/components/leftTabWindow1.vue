<!-- <template>
  <v-card flat class="leftPanelCard">
    <vue-tree-list v-if="fileTree.length" :model="fileTree" @change="handleChange" /> 
  </v-card>
</template>

<script>
import VueTreeList from 'vue-tree-list'
import { ref, onMounted } from 'vue'

export default {
  name: 'Tab1Content',
  data() {
  return {
    // fileTree: [],
    transformed: []
  }
},
  components: {
    VueTreeList
  },
  setup() {
    const fileTree = ref([])

    async function fetchFilesAndTransform() {
      try {
        const files = await window.electronAPI.fetchFiles('x:/Repo/NFModTool/src')
        const transformed = transformFileStructureToTree(files)
        fileTree.value = transformed

        console.log('Original file structure:', files)
        console.log('Transformed file structure:', transformed)

        const appPath = await window.electronAPI.getAppPath()
        console.log('Application path:', appPath)
      } catch (error) {
        console.error('Failed to fetch files or get app path:', error)
      }
    }

    onMounted(() => {
      fetchFilesAndTransform()
    })

    function handleChange(node) {
      console.log('Selected files:', node)
    }

    return {
      fileTree,
      handleChange
    }
  }
}

function transformFileStructureToTree(files, parentPath = '') {
  console.log('Input to transformFileStructureToTree:', files)

  const transformedFiles = files
    .filter((file) => !file.error)
    .flatMap((file) => {
      const path = parentPath + '/' + file.name
      const node = {
        text: file.name,
        isDirectory: file.isDirectory
      }

      if (file.isDirectory && file.children) {
        node.children = transformFileStructureToTree(file.children, path)
      }

      return node
    })

  console.log('Output from transformFileStructureToTree:', transformedFiles)

  return transformedFiles
}
</script> -->

<template>
  <v-card flat class="leftPanelCard">
    <vue-tree-list v-if="fileTree.length" :model="fileTree" @change="handleChange" />
  </v-card>
</template>

<script>
import { ref, onMounted } from 'vue'
import { VueTreeList, Tree, TreeNode } from 'vue-tree-list'

export default {
  name: 'Tab1Content',
  components: {
    VueTreeList
  },
  setup() {
    const fileTree = ref([])

    const fetchFilesAndTransform = async () => {
      try {
        const files = await window.electronAPI.fetchFiles('x:/Repo/NFModTool/src')
        const transformed = transformFileStructureToTree(files)
        fileTree.value = new Tree(transformed)

        console.log('Original file structure:', files)
        console.log('Transformed file structure:', transformed)

        const appPath = await window.electronAPI.getAppPath()
        console.log('Application path:', appPath)
      } catch (error) {
        console.error('Failed to fetch files or get app path:', error)
      }
    }

    onMounted(() => {
      fetchFilesAndTransform()
    })

    const handleChange = (node) => {
      console.log('Selected files:', node)
    }

    return {
      fileTree,
      handleChange
    }
  }
}

function transformFileStructureToTree(files, parentPath = '') {
  console.log('Input to transformFileStructureToTree:', files)

  if (!files || files.length === 0) {
    console.error('Files are undefined or empty.')
    return
  }

  const transformedFiles = files
    .filter((file) => !file.error)
    .map((file) => {
      const path = parentPath + '/' + file.name
      const treeNode = new TreeNode({
        name: file.name,
        isDirectory: file.isDirectory,
        children: transformFileStructureToTree(file.children, path)
      })

      return treeNode
    })

  console.log('Output from transformFileStructureToTree:', transformedFiles)

  return transformedFiles
}
</script>
