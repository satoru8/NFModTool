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
    // createEditor(this.$refs.editorContainer)
    this.editor = createEditor(this.$refs.editorContainer)
    window.addEventListener('resize', this.handleResize)
  },
  beforeUnmount() {
    if (this.editor) {
      this.editor.dispose()
      window.removeEventListener('resize', this.handleResize)
    }
  },
  methods: {
    handleResize() {
      if (this.editor) {
        this.editor.layout()
      }
    }
  }
}
</script>
