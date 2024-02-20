<template>
  <div id="midPanel">
    <div class="midPanelInner">
      <EditorTabs :tabs="tabs" :activeTab="activeTab" @switchTab="switchTab" @addTab="addTab" />
      <div class="editorContainer" ref="editorContainer"></div>
    </div>
  </div>
</template>

<script>
import EditorTabs from "../components/editorTabs.vue";
import { createEditor } from '../js/monacoSetup.js'
import { editorManager } from '../js/editorManager'

export default {
  name: 'OctdatEditor',
  components: {
    EditorTabs,
  },
  data() {
    return {
      tabs: [{ id: 'tab1', name: 'Tab 1', active: true }],
      activeTab: 'tab1',
    };
  },
  methods: {
    switchTab(tabId) {
      this.tabs.forEach((tab) => {
        tab.active = tabId === tab.id;
      });
      this.activeTab = tabId;
      this.updateEditorVisibility(tabId);
    },
    async addTab() {
      const newTabId = 'tab' + (this.tabs.length + 1);
      this.tabs.push({
        id: newTabId,
        name: 'Tab ' + (this.tabs.length + 1),
        active: false,
      });
      await this.initializeEditor(newTabId);
      await this.switchTab(newTabId);
    },
    async updateEditorVisibility(tabId) {
      const editor = editorManager.getEditor(tabId);
      if (!editor) {
        console.error(`Editor not found for tab ${tabId}`);
        return;
      }

      editorManager.getEditorIds().forEach((id) => {
        const ed = editorManager.getEditor(id);
        ed.getDomNode().style.display = id === tabId ? 'block' : 'none';
      });
    },
    async initializeEditor(tabId) {
      const containerId = `editorContainer-${tabId}`;
      let container = document.getElementById(containerId);

      if (!container) {
        container = document.createElement('div');
        container.id = containerId;
        container.className = 'editorContainer';
        this.$refs.editorContainer.appendChild(container);
      }

      let editor = editorManager.getEditor(tabId);
      if (!editor) {
        editor = await createEditor(container, {}, tabId);
      }
    },
  },
  async mounted() {
    await this.initializeEditor(this.activeTab);
  },
  beforeUnmount() {
    editorManager.getEditorIds().forEach((editorId) => {
      editorManager.removeEditor(editorId);
    });
  },
};
</script>

<style>
.midPanelInner {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.editorContainer {
  width: 100%;
  height: 100%;
}
</style>
