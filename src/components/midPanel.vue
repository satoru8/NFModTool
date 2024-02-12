<template>
  <div class="midPanelInner" ref="editorContainer"></div>
</template>

<style>
.monaco-editor,
.cm-editor,
.midPanelInner {
  height: 100%;
  width: 100%;
}
</style>

<script>
import * as monaco from "monaco-editor";
import '../js/monacoSetup.js';

export default {
  name: 'OctdatEditor',
  data() {
    return {
      editor: null,
    };
  },
  
  mounted() {
    this.editor = monaco.editor.create(this.$refs.editorContainer, {
      value: `function spicyKatsu() {\n\tconsole.log("Hello octdat");\n}`,
      language: 'octdat',
      theme: 'vs-dark',
    });
  },
  beforeUnmount() {
    if (this.editor) {
      this.editor.dispose();
    }
  }
}
</script>