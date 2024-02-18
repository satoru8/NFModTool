<template>
  <div id="midPanel">
    <div class="midPanelInner" ref="editorContainer"></div>
  </div>
</template>

<script>
import { createEditor } from '../js/monacoSetup.js'

export default {
  name: 'OctdatEditor',
  async mounted() {
    try {
      this.editor = await createEditor(this.$refs.editorContainer)
    } catch (error) {
      console.error('Failed to create editor', error)
    }
  },
  beforeUnmount() {
    if (this.editor) {
      this.editor.dispose()
    }
  }
}
</script>
