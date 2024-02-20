<template>
  <div id="leftPanel">
    <div class="leftPanelInner">
      <!-- Left Panel with Tabs -->
      <v-card class="leftPanelTabs" min-width="60" max-width="60">
        <v-tabs hide-slider v-model="tab" direction="vertical" color="primary" class="width-50">
          <v-tab v-for="item in tabs" :key="item.value" :value="item.value" class="leftPanelTab">
            <v-icon size="x-large">{{ item.icon }}</v-icon>
          </v-tab>
        </v-tabs>
      </v-card>
      <!-- Right Panel with Windows -->
      <v-window v-model="tab" class="h-100 w-100">
        <v-window-item v-for="item in tabs" :key="item.value" :value="item.value" class="leftPanelWindow">
          <v-card flat class="leftPanelCard">
            <v-card-text>
              <p>Content for {{ item.label }}</p>
            </v-card-text>
          </v-card>
        </v-window-item>
      </v-window>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeftPanel',
  data() {
    return {
      tab: 'tab1',
      tabs: [
        { value: 'tab1', icon: 'mdi-home', label: 'Tab 1' },
        { value: 'tab2', icon: 'mdi-heart-broken', label: 'Tab 2' },
        { value: 'tab3', icon: 'mdi-file-tree-outline', label: 'Tab 3' },
        { value: 'tab4', icon: 'mdi-code-array', label: 'Tab 4' }
      ]
    }
  }
}
</script>