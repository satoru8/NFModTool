<template>
  <v-card flat class="leftPanelCard toolsTab">
    <v-card-text class="toolsTabInner">
      <FileInput @fileChanged="onFileChanged" />
    </v-card-text>
  </v-card>
</template>

<script>
import { ref, defineComponent } from 'vue';
import FileInput from './fileInput.vue';
import { editorManager } from '../js/editorManager';

export default defineComponent({
  name: 'Tab1Content',
  components: {
    FileInput,
  },
  props: {
    currentTab: String,
  },
  setup(props) {
    const onFileChanged = (fileContent) => {
      const editor = editorManager.getEditor(props.currentTab);

      if (editor) {
        editor.setValue(fileContent);
      } else {
        console.error('Editor:', editor);
        console.error('Editor IDs:', editorManager.getEditorIds());
      }
    };

    return {
      onFileChanged,
    };
  },
});
</script>
