<!-- <template>
  <v-card flat class="leftPanelCard">
    <v-card-text>
      <span class="text-h6">File/Dir Manager</span>
      <v-spacer class="my-2" />
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'Tab1Content'
}
</script> -->

<template>
  <v-card flat class="leftPanelCard">
    <vue-tree-list v-if="fileTree.length" :model="fileTree" @change="handleChange" />
  </v-card>
</template>

<script>
import VueTreeList from 'vue-tree-list'
import { ref, onMounted } from 'vue';
const fileStructure = ref([]);

export default {
  name: 'Tab1Content',
  components: {
    VueTreeList
  },
  data() {
    return {
      fileTree: fileStructure.value
    }
  },
  setup() {
    const fileStructure = ref([]);

    onMounted(async () => {
      try {
        const files = await window.electronAPI.fetchFiles('.');
        fileStructure.value = files;

        const appPath = await window.electronAPI.getAppPath();
        console.log('Application path:', appPath);
      } catch (error) {
        console.error('Failed to fetch files or get app path:', error);
      }
    });

    const fileTree = ref([]);

    fileTree.value = transformFileStructureToTree(fileStructure.value);

    console.log('fileTree value before rendering:', JSON.stringify(fileTree.value, null, 2));

    return {
      fileTree,
    };
  },

  methods: {
    fetchFiles: (path) => {
      ipcRenderer.invoke('read-directory', path).then((data) => {
        console.log('Data received from the main process:', data);
        return data;
      });
    },

    handleChange(node) {
      console.log('Selected files:', node);
    }
  }
}


// function transformFileStructureToTree(files) {
//   return files.flatMap((file) => {
//     const node = {
//       text: file.name,
//       isDirectory: file.isDirectory,
//     };

//     if (file.isDirectory && file.children) {
//       node.children = transformFileStructureToTree(file.children);
//     }

//     return node;
//   });
// }

function transformFileStructureToTree(files, parentPath = '') {
  console.log('Input to transformFileStructureToTree:', files);

  const transformedFiles = files
    .filter((file) => !file.error)
    .flatMap((file) => {
      const path = parentPath + '/' + file.name;
      const node = {
        text: file.name,
        isDirectory: file.isDirectory,
      };

      if (file.isDirectory && file.children) {
        node.children = transformFileStructureToTree(file.children, path);
      }

      return node;
    });

  console.log('Output from transformFileStructureToTree:', transformedFiles);

  return transformedFiles;
}
</script>
                                           