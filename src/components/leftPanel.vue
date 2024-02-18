<template>
  <div id="leftPanel">
    <div class="leftPanelInner">
    <!-- Left Panel with Tabs -->
    <v-card class="leftPanelTabs" min-width="75" max-width="75">
      <v-tabs v-model="tab" direction="vertical" color="primary">
        <v-tab value="tab1">Tab 1</v-tab>
        <v-tab value="tab2">Tab 2</v-tab>
        <v-tab value="tab3">Tab 3</v-tab>
        <v-tab value="tab4">Tab 4</v-tab>
      </v-tabs>
    </v-card>
    <!-- Right Panel with Windows -->
    <v-window v-model="tab" class="h-100 w-100">
      <v-window-item value="tab1" class="leftPanelWindow">
        <v-card flat class="leftPanelCard">
          <v-card-text>
            <p>Content for Tab 1</p>
            <fileManager />
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
import fileManager from './fileManager.vue'
export default {
  components: {
    fileManager
  },
  name: 'LeftPanel',
  data() {
    return {
      tab: 'tab1'
    }
  }
}
</script>