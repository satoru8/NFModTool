<template>
  <v-card flat class="leftPanelCard">
    <v-card-text>
      <v-btn block flat @click="callAll" text="Editor Manager Output" />
    </v-card-text>
  </v-card>
</template>

<script setup>
import { editorManager } from '../js/editorManager'

const callAll = () => {
  editorManager.getAllEditorIds().forEach((id) => {
    console.log('Editor ID:', id)
  })
  console.log('--------------')
  console.log(editorManager.getAllEditorsAsArray())
  console.log('--------------')
  console.log('Editor Count:', editorManager.getEditorCount())
}
</script>
