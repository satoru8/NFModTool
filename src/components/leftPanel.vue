<template>
  <div id="leftPanel" class="h-100">
    <!-- <div class="leftPanelInner"> -->

    <!-- Left Panel with Tabs -->
    <v-card class="left-panel h-100" min-width="75" max-width="75">
      <v-tabs v-model="tab" direction="vertical" color="primary">
        <v-tab value="tab1">Tab 1</v-tab>
        <v-tab value="tab2">Tab 2</v-tab>
        <v-tab value="tab3">Tab 3</v-tab>
        <v-tab value="tab4">Tab 4</v-tab>
      </v-tabs>
    </v-card>

    <!-- Right Panel with Windows -->
    <v-window v-model="tab" class="right-panel h-100">
      <v-window-item value="tab1">
        <v-card flat>
          <v-card-text>
            <p>Content for Tab 1</p>
            <!-- <fileStructre /> -->
          </v-card-text>
        </v-card>
      </v-window-item>
      <v-window-item value="tab2">
        <v-card flat>
          <v-card-text>
            <p>Content for Tab 2</p>
          </v-card-text>
        </v-card>
      </v-window-item>
      <v-window-item value="tab3">
        <v-card flat>
          <v-card-text>
            <p>Content for Tab 3</p>
          </v-card-text>
        </v-card>
      </v-window-item>
      <v-window-item value="tab4">
        <v-card flat>
          <v-card-text>
            <p>Content for Tab 4</p>
          </v-card-text>
        </v-card>
      </v-window-item>
    </v-window>

    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: 'LeftPanel',
  data() {
    return {
      tab: 'tab1'
    }
  }
}
</script>

<style>
.left-panel {
  flex: 1;
}

.right-panel {
  flex: 3;
  overflow: auto;
}
</style>
