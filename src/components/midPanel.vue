<template>
  <div id="midPanel">
    <div class="midPanelInner" ref="editorContainer"></div>
  </div>
</template>

<script>
import * as monaco from 'monaco-editor'
import '../js/monacoSetup.js'

export default {
  name: 'OctdatEditor',
  data() {
    return {
      editor: null
    }
  },

  mounted() {
    // const midPanel = document.getElementById('midPanel');
    this.editor = monaco.editor.create(this.$refs.editorContainer, {
      value: `test`,
      language: 'octdat',
      theme: 'octdatTheme',
      scrollBeyondLastLine: false,
      automaticLayout: true
    })
  },
  beforeUnmount() {
    if (this.editor) {
      this.editor.dispose()
    }
  }
}
</script>
