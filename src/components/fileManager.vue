<template>
    <v-treeview :items="fileStructure" activatable @update:active="fetchFiles" open-on-click>
      <template v-slot:prepend="{ item }">
        <v-icon small>
          {{ item.type === 'folder' ? 'mdi-folder' : 'mdi-file' }}
        </v-icon>
      </template>
    </v-treeview>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const fileStructure = ref([]);
  
  onMounted(async () => {
    try {
      const files = await window.electronAPI.fetchFiles('.');
      fileStructure.value = files;
    } catch (error) {
      console.error('Failed to fetch files:', error);
    }
  });

  const appPath = await window.electronAPI.getAppPath();
console.log('Application path:', appPath);
  
  // Optionally, set up a listener for directory read events
  window.electronAPI.onDirectoryRead((event, files) => {
    fileStructure.value = files;
  });
  </script>
  