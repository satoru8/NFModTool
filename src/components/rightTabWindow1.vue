<template>
  <v-card flat class="leftPanelCard toolsTab">
    <v-card-text class="toolsTabInner">
      <FileInput @fileChanged="onFileChanged" icon="" label="Insert Octdat" />
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'
import FileInput from './fileInput.vue'
import { editorManager } from '../js/editorManager'

const activeTab = ref('tab1')

const onFileChanged = (fileContent) => {
  console.log('Active Tab:', activeTab.value)
  console.log('All Editor IDs:', editorManager.getAllEditorIds())

  const editor = editorManager.getEditorById(activeTab.value)

  if (editor) {
    console.log('Editor Found:', editor)
    editor.setValue(fileContent)
  } else {
    console.error('Editor Not Found for ID:', activeTab.value)
  }
}
</script>
