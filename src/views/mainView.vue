<template>
  <div id="appMain">
    <LoadingScreen v-if="appIsLoading" :is-loading="appIsLoading" />

    <UserSetup v-if="!appIsLoading && !setupCompleted" @setup-completed="handleSetupCompleted" />

    <TopPanel v-if="!appIsLoading && setupCompleted" @tab-changed="handleTabChange" />

    <keep-alive>
      <component
        v-if="!appIsLoading && setupCompleted"
        :is="selectedTabComponent"
        :key="selectedTab"
      />
    </keep-alive>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import TopPanel from '../components/topPanel.vue'
import LoadingScreen from '../components/loadingScreen.vue'
import UserSetup from '../components/userSetup.vue'
import OctdatView from './octdatView.vue'
import VisualEditor from '../components/visualEditor.vue'
import SettingsPanel from '../components/settingsPanel.vue'

const appIsLoading = ref(true)
const selectedTab = ref('octdat')
const setupCompleted = ref(false)

const handleTabChange = (tab) => {
  selectedTab.value = tab
}

const handleSetupCompleted = () => {
  setupCompleted.value = true
}

const selectedTabComponent = computed(() => {
  const tabComponentMap = {
    octdat: OctdatView,
    visual: VisualEditor,
    settings: SettingsPanel
  }

  return tabComponentMap[selectedTab.value] || null
})

onMounted(async () => {
  const settings = await window.nfAPI.loadSettings()
  await window.nfAPI.rendererReady('renderer-ready')
  await window.nfAPI.loadingDone(() => {
    appIsLoading.value = false
    setupCompleted.value = settings.setupCompleted ?? false
  })
})
</script>
