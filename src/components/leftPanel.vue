<template>
  <div id="leftPanel">
    <div class="leftPanelInner">
      <!-- Left Panel with Tabs -->
      <v-card class="leftPanelTabs" min-width="60" max-width="60">
        <v-tabs hide-slider v-model="tab" direction="vertical" color="primary">
          <v-tab v-for="item in tabs" :key="item.value" :value="item.value" class="leftPanelTab">
            <v-icon size="x-large">{{ item.icon }}</v-icon>
          </v-tab>
        </v-tabs>
      </v-card>
      <!-- Right Panel with Windows -->
      <v-window v-model="tab" class="h-100 w-100">
        <v-window-item v-for="item in tabs" :key="item.value" :value="item.value" class="leftPanelWindow">
          <!-- Use keep-alive for caching the component state -->
          <keep-alive>
            <component :is="item.contentComponent" :key="item.value"></component>
          </keep-alive>
        </v-window-item>
      </v-window>
    </div>
  </div>
</template>

<script>
import Tab1Content from './leftTabWindow1.vue'
import Tab2Content from './leftTabWindow2.vue'
import Tab3Content from './leftTabWindow3.vue'
import Tab4Content from './leftTabWindow4.vue'

export default {
  name: 'LeftPanel',
  components: {
    Tab1Content,
    Tab2Content,
    Tab3Content,
    Tab4Content
  },
  data() {
    return {
      tab: 'tab1',
      tabs: [
        { value: 'tab1', icon: 'mdi-home', label: 'Tab 1', contentComponent: 'Tab1Content' },
        { value: 'tab2', icon: 'mdi-heart-broken', label: 'Tab 2', contentComponent: 'Tab2Content' },
        { value: 'tab3', icon: 'mdi-file-tree-outline', label: 'Tab 3', contentComponent: 'Tab3Content' },
        { value: 'tab4', icon: 'mdi-code-array', label: 'Tab 4', contentComponent: 'Tab4Content' }
      ]
    }
  },
  methods: {
    getContentComponent(tabValue) {
      switch (tabValue) {
        case 'tab1':
          return 'Tab1Content'
        case 'tab2':
          return 'Tab2Content'
        case 'tab3':
          return 'Tab3Content'
        case 'tab4':
          return 'Tab4Content'
        default:
          return null
      }
    }
  }
}
</script>