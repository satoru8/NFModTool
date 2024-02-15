<template>
  <div id="midPanel">
    <div class="midPanelInner" ref="editorContainer"></div>
  </div>
</template>

<script>
import { createEditor } from '../js/monacoSetup.js'

export default {
  name: 'OctdatEditor',
  mounted() {
    this.editor = createEditor(this.$refs.editorContainer)
  },
  beforeUnmount() {
    if (this.editor) {
      this.editor.dispose()
    }
  }
}
</script>
