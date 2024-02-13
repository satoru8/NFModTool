<template>
  <div id="midPanel">
    <div class="midPanelInner" ref="editorContainer"></div>
  </div>
</template>

<style>
.monaco-editor,
.cm-editor,
.midPanelInner {
  display: flex;
  height: 100%;
  width: 100%;
}
</style>

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
