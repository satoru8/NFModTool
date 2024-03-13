<template>
  <div id="appMain">

    <LoadingScreen id="loadingScreen" v-if="appIsLoading" :is-loading="appIsLoading" />

    <UserSetup id="userSetup" v-if="!appIsLoading "/>

    <TopPanel v-if="!appIsLoading" @tab-changed="handleTabChange" />

    <keep-alive>
      <component v-if="!appIsLoading" :is="selectedTabComponent" :key="selectedTab" />
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

const handleTabChange = (tab) => {
  selectedTab.value = tab
}

const selectedTabComponent = computed(() => {
  const tabComponentMap = {
    octdat: OctdatView,
    visual: VisualEditor,
    settings: SettingsPanel
  }

  return tabComponentMap[selectedTab.value] || null
})

onMounted(() => {
  window.nfAPI.rendererReady('renderer-ready')
  window.nfAPI.loadingDone(() => {
    appIsLoading.value = false
  })
})
</script>
