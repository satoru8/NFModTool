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

<script setup>
import { ref, defineAsyncComponent } from 'vue'

const Tab1Content = defineAsyncComponent(() => import('./leftTabWindow1.vue'))
const Tab2Content = defineAsyncComponent(() => import('./leftTabWindow2.vue'))
const Tab3Content = defineAsyncComponent(() => import('./leftTabWindow3.vue'))
const Tab4Content = defineAsyncComponent(() => import('./leftTabWindow4.vue'))

const tab = ref('tab1')

const tabs = [
  { value: 'tab1', icon: 'mdi-home', label: 'Tab 1', component: Tab1Content },
  { value: 'tab2', icon: 'mdi-account', label: 'Tab 2', component: Tab2Content },
  { value: 'tab3', icon: 'mdi-file-tree-outline', label: 'Tab 3', component: Tab3Content },
  { value: 'tab4', icon: 'mdi-code-array', label: 'Tab 4', component: Tab4Content }
]
</script>
