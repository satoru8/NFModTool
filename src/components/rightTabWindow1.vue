<template>
  <v-card flat class="leftPanelCard toolsTab">
    <v-card-text class="toolsTabInner">
      <FileInput @fileChanged="onFileChanged" icon="" label="Insert Octdat" />
    </v-card-text>
  </v-card>
</template>

<script setup>
import FileInput from './fileInput.vue'
import { editorManager } from '../js/editorManager'

const props = defineProps(['currentTab'])

const onFileChanged = (fileContent) => {
  const editor = editorManager.getEditor(props.currentTab)

  if (editor) {
    editor.setValue(fileContent)
  } else {
    console.error('Editor:', editor)
    console.error('Editor IDs:', editorManager.getEditorIds())
  }
}
</script>
