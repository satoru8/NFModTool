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
        <v-window-item
          v-for="item in tabs"
          :key="item.value"
          :value="item.value"
          class="leftPanelWindow"
        >
          <keep-alive>
            <component :is="item.component" :key="item.value" />
          </keep-alive>
        </v-window-item>
      </v-window>
    </div>
  </div>
</template>

<script>
import { markRaw } from 'vue'

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
        { value: 'tab1', icon: 'mdi-home', label: 'Tab 1', component: markRaw(Tab1Content) },
        { value: 'tab2', icon: 'mdi-account', label: 'Tab 2', component: markRaw(Tab2Content) },
        {
          value: 'tab3',
          icon: 'mdi-file-tree-outline',
          label: 'Tab 3',
          component: markRaw(Tab3Content)
        },
        { value: 'tab4', icon: 'mdi-code-array', label: 'Tab 4', component: markRaw(Tab4Content) }
      ]
    }
  }
}
</script>
