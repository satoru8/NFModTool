import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import MonacoEditorPlugin from 'vite-plugin-monaco-editor';

// https://vitejs.dev/config
export default defineConfig({
  plugins: [
    vue(),
    MonacoEditorPlugin({
      // Specify options here
      languageWorkers: ['editorWorkerService', 'octdat']
    })
  ]
});