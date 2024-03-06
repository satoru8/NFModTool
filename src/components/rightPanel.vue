<template>
  <div id="rightPanel">
    <div class="rightPanelInner">
      <!-- Right Panel with Tabs -->
      <v-card class="h-100">
        <v-tabs fixed-tabs hide-slider v-model="tab" direction="horizontal" color="primary">
          <v-tab v-for="item in tabs" :key="item.value" :value="item.value">{{ item.label }}</v-tab>
        </v-tabs>

        <!-- Bottom Panel with Windows -->
        <v-window v-model="tab">
          <v-window-item v-for="item in tabs" :key="item.value" :value="item.value">
            <component :is="item.component" :current-tab="tab" />
          </v-window-item>
        </v-window>
      </v-card>
    </div>
  </div>
</template>

<script setup>
import { shallowRef } from 'vue'
import Tab1Content from './rightTabWindow1.vue'
// import TabTwoContent from './rightTabWindow2.vue';
// import TabThreeContent from './rightTabWindow3.vue';
// import TabFourContent from './rightTabWindow4.vue';

const tab = shallowRef('Tools')
const tabs = [
  { label: 'Tools', value: 'Tools', component: Tab1Content }
  // { label: 'Tab 2', value: 'tab2', component: TabTwoContent },
  // { label: 'Tab 3', value: 'tab3', component: TabThreeContent },
  // { label: 'Tab 4', value: 'tab4', component: TabFourContent }
]
</script>
