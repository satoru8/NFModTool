<script>
import leftPanel from '../components/leftPanel.vue'
import midPanel from '../components/midPanel.vue'
import rightPanel from '../components/rightPanel.vue'
import topPanel from '../components/topPanel.vue'
import LoadingScreen from '../components/loadingScreen.vue'
import contextMenu from '../components/contextMenu.vue'

export default {
  name: 'MainView',
  props: {
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  components: {
    LoadingScreen,
    contextMenu,
    leftPanel,
    midPanel,
    rightPanel,
    topPanel
  },
  data() {
    return {
      appIsLoading: true,
      contextMenu: {
        show: false,
        x: 0,
        y: 0
      }
    }
  },
  mounted() {
    window.electronAPI.send('renderer-ready')
    window.electronAPI.loadingDone(() => {
      console.log("Received 'loading-done' message")
      this.appIsLoading = false
    })
  }
}
</script>

<template>
  <contextMenu @option-clicked="handleContextOption($event)"  />
  <LoadingScreen id="loadingScreen" v-if="appIsLoading" :is-loading="appIsLoading" />
  <topPanel />
  <leftPanel />
  <midPanel />
  <rightPanel />
</template>
