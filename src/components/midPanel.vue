<template>
  <div class="midPanelInner" ref="editorContainer">
  </div>
</template>

<style>
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
      value: 'function spicyKatsu() {\n\tconsole.log("Hello octdat");\n}',
      language: 'javascript',
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



<!-- <script>
import { EditorState } from "@codemirror/state";
import { basicSetup } from "codemirror";
import { keymap, EditorView } from "@codemirror/view";
import { defaultKeymap } from "@codemirror/commands";
import { ref, onMounted } from "vue";

export default {
  setup() {
    const editorContainer = ref(null);

    onMounted(() => {
      const startState = EditorState.create({
        doc: "Hello World",
        extensions: [
          basicSetup, 
          keymap.of(defaultKeymap)
        ]
      });

      const view = new EditorView({
        state: startState,
        parent: editorContainer.value
      });
    });

    return {
      editorContainer
    };
  }
};
</script> -->