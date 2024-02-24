<template>
  <div id="appMain">
    <contextMenu @option-clicked="handleContextOption($event)" />
    <loadingScreen id="loadingScreen" v-if="appIsLoading" :is-loading="appIsLoading" />
    <topPanel @tab-changed="handleTabChange($event)" />

    <keep-alive>
      <leftPanel v-if="selectedTab === 'monaco'" :key="selectedTab" />
    </keep-alive>

    <keep-alive>
      <midPanel v-if="selectedTab === 'monaco'" :key="selectedTab" />
    </keep-alive>

    <keep-alive>
      <rightPanel v-if="selectedTab === 'monaco'" :key="selectedTab" />
    </keep-alive>

    <keep-alive>
      <visualEditor v-if="selectedTab === 'visual'" :key="selectedTab" />
    </keep-alive>

    <settingsPanel v-if="selectedTab === 'settings'" :key="selectedTab" />
  </div>
</template>

<script>
import leftPanel from '../components/leftPanel.vue'
import midPanel from '../components/midPanel.vue'
import rightPanel from '../components/rightPanel.vue'
import topPanel from '../components/topPanel.vue'
import loadingScreen from '../components/loadingScreen.vue'
import contextMenu from '../components/contextMenu.vue'
import visualEditor from '../components/visualEditor.vue'
import settingsPanel from '../components/settingsPanel.vue'

export default {
  name: 'MainView',
  props: {
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  components: {
    loadingScreen,
    contextMenu,
    leftPanel,
    midPanel,
    rightPanel,
    topPanel,
    visualEditor,
    settingsPanel
  },
  data() {
    return {
      appIsLoading: true,
      contextMenu: {
        show: false,
        x: 0,
        y: 0
      },
      selectedTab: 'monaco',
      showSettings: false
    }
  },
  mounted() {
    window.electronAPI.rendererReady('renderer-ready')
    window.electronAPI.loadingDone(() => {
      this.appIsLoading = false
    })
  },
  methods: {
    handleTabChange(tab) {
      this.selectedTab = tab
      // this.showSettings = tab === 'settings';
    },
    // openSettings() {
    //   this.showSettings = true;
    // },
    // openVisual() {
    //   this.showVisual = true
    // },
    handleContextOption(option) {
      console.log(`Clicked ${option}`)
    }
  }
}
</script>
