<template>
  <v-container>
    <v-row>

      <v-col cols="9">
        <!-- File List -->
        <v-row>
          <v-col v-for="(file, index) in fileList" :key="index" cols="3">
            <!-- Display each file as a card or another Vuetify component -->
            <v-card @click="openFile(file)">
              <v-card-text>test</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { editorManager } from '../js/editorManager'

export default {
  data() {
    return {
      fileList: [],
      selectedFileContent: '', 
    };
  },
  methods: {
    navigate() {
    },
    openFile() {
      const editorId = 'mainEditor';
      const editor = editorManager.getEditor(editorId);

      if (editor) {
        editor.setValue(selectedFileContent);
      }
    },
    loadFileList() {
      this.fileList = [];
    }
  },
  mounted() {
    this.loadFileList();
  },
};
</script>
