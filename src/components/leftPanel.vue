<template>
  <div id="leftPanel">
    <div class="leftPanelInner">
    <!-- Left Panel with Tabs -->
    <v-card class="leftPanelTabs" min-width="60" max-width="60">
      <v-tabs hide-slider v-model="tab" direction="vertical" color="primary">
        <v-tab value="tab1">
          <v-icon size="x-large">mdi-home</v-icon>
        </v-tab>
        <v-tab value="tab2">
          <v-icon size="x-large">mdi-heart-broken</v-icon>
        </v-tab>
        <v-tab value="tab3">
          <v-icon size="x-large">mdi-file-tree-outline</v-icon>
        </v-tab>
        <v-tab value="tab4">
          <v-icon size="x-large">mdi-code-array</v-icon>
        </v-tab>
      </v-tabs>
    </v-card>
    <!-- Right Panel with Windows -->
    <v-window v-model="tab" class="h-100 w-100">
      <v-window-item value="tab1" class="leftPanelWindow">
        <v-card flat class="leftPanelCard">
          <v-card-text>
            <p>Content for Tab 1</p>
            <!-- <fileManager @fileChanged="onFileChanged" /> -->
          </v-card-text>
        </v-card>
      </v-window-item>
      <v-window-item value="tab2" class="leftPanelWindow">
        <v-card flat class="leftPanelCard">
          <v-card-text>
            <p>Content for Tab 2</p>
          </v-card-text>
        </v-card>
      </v-window-item>
      <v-window-item value="tab3" class="leftPanelWindow">
        <v-card flat class="leftPanelCard">
          <v-card-text>
            <p>Content for Tab 3</p>
          </v-card-text>
        </v-card>
      </v-window-item>
      <v-window-item value="tab4" class="leftPanelWindow">
        <v-card flat class="leftPanelCard">
          <v-card-text>
            <p>Content for Tab 4</p>
          </v-card-text>
        </v-card>
      </v-window-item>
    </v-window>
    </div>
  </div>
</template>

<script>
// import { ipcMain } from 'electron';
// import fileManager from './fileManager.vue'
export default {
  components: {
    // fileManager
  },
  name: 'LeftPanel',
  data() {
    return {
      tab: 'tab1'
    }
  },
  methods: {
    // onFileChanged() {
    //   ipcMain.emit('read-directory');

    //   console.log('File Changed');
    // }
  }
}
</script>