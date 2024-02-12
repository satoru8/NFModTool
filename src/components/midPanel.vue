<template>
  <div class="midPanelInner">
    <h1>Mid Component</h1>
    <div class="editor" ref="editorContainer"></div>
  </div>
</template>

<style>
.midPanelInner {
  background-color: purple;

  height: 100%;
  width: 100%;

}
.editor {
    height: 800px;
}
</style>

<script>
import * as monaco from "monaco-editor";

export default {
  name: 'OctdatEditor',
  mounted() {
    this.editor = monaco.editor.create(this.$refs.editorContainer, {
      value: 'function spicyKatsu() {\n\tconsole.log("Hello octdat");\n}',
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
