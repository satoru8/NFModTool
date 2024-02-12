<template>
  <div class="midPanelInner" ref="editorContainer">
    <h1>Editor Title - Remove this later</h1>
    <!-- <div class="editorContainer" ref="editorContainer"></div> -->
  </div>
</template>

<style>

.cm-editor,
.midPanelInner {
  height: 100%;
  width: 100%;

}

</style>

<!-- <script>
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
</script> -->


<script>
import { EditorState } from "@codemirror/state";
import { EditorView, keymap } from "@codemirror/view";
import { defaultKeymap } from "@codemirror/commands";
import { ref, onMounted } from "vue";

export default {
  setup() {
    const editorContainer = ref(null);

    onMounted(() => {
      const startState = EditorState.create({
        doc: "Hello World",
        extensions: [keymap.of(defaultKeymap)]
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
</script>