<template>
  <v-card flat class="editorTabsWrapper rounded-0">
    <v-tabs
      class="editorTabs"
      color="primary"
      v-model="selectedTab"
      hide-slider
      show-arrows
      density="compact"
    >
      <v-tab
        class="editorTab"
        v-for="tab in tabs"
        :key="tab.id"
        :value="tab.id"
        :class="tab.id"
        @click="selectTab(tab.id)"
      >
        {{ tab.name }}
      </v-tab>
      <v-btn
        flat
        class="addTabButton rounded-0"
        icon="mdi-plus"
        density="compact"
        @click="addTab"
      />
    </v-tabs>
  </v-card>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  tabs: Array,
  activeTab: String
})

const emit = defineEmits(['switchTab', 'addTab'])

const selectedTab = ref(props.activeTab)

watch(
  () => props.activeTab,
  (newVal) => {
    selectedTab.value = newVal
  }
)

const selectTab = (tabId) => {
  emit('switchTab', tabId)
}

const addTab = () => {
  emit('addTab')
}
</script>
