<template>
  <div id="topPanel">
    <div class="topPanelInner">
      <TitleBar />

      <v-card flat>
        <v-tabs v-model="tab" align-tabs="center" hide-slider fixed-tabs color="primary">
          <v-tab
            v-for="tabItem in tabs"
            :key="tabItem.value"
            :value="tabItem.value"
            @click="changeTab(tabItem.value)"
          >
            {{ tabItem.text }}
          </v-tab>
        </v-tabs>
      </v-card>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TitleBar from '../components/titleBar.vue'

const emit = defineEmits(['tab-changed', 'settings-clicked'])

const tabs = [
  { value: 'octdat', text: 'Octdat Editor' },
  { value: 'visual', text: 'Visual Editor' },
  { value: 'settings', text: 'Settings' }
]

const tab = ref('octdat')

const changeTab = (newTab) => {
  tab.value = newTab
  emit('tab-changed', newTab)

  if (newTab === 'settings') {
    emit('settings-clicked')
  }
}
</script>
