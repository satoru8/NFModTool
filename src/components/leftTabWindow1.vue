<template>
  <v-card flat class="leftPanelCard">
    <VueTree v-if="fileTree.length" @change="handleChange" v-model:nodes="fileTree" />
  </v-card>
</template>

<script>
import { ref, onMounted } from 'vue'
import VueTree from 'vue3-tree'

export default {
  name: 'Tab1Content',
  components: {
    VueTree
  },
  setup() {
    const fileTree = ref([])

    const fetchFilesAndTransform = async () => {
      try {
        const files = await window.electronAPI.fetchFiles('E:/Repo/NFModTool/src/js')
        const transformed = transformFileStructureToTree(files)
        fileTree.value = transformed

        console.log('Original file structure:', files)
        console.log('Transformed file structure:', transformed)
        console.log('Transformed file tree:', fileTree.value)
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
  if (!files || files.length === 0) {
    console.error('Files are undefined or empty.');
    return;
  }

  // const transformedFiles = files
  //   .filter((file) => !file.error)
  //   .flatMap((file) => {
  //     const path = parentPath + '/' + file.name;

  //     const node = {
  //       name: file.name,
  //       isDirectory: file.isDirectory,
  //     };

  //     if (file.isDirectory && file.children) {
  //       node.children = transformFileStructureToTree(file.children, path);
  //     }

  //     return node;
  //   });

  const transformedFiles = files
  .filter((file) => !file.error)
  .map((file) => ({
    name: file.name,
    isDirectory: file.isDirectory,
  }));

  return transformedFiles;
}
</script>