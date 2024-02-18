<script>
import leftPanel from '../components/leftPanel.vue'
import midPanel from '../components/midPanel.vue'
import rightPanel from '../components/rightPanel.vue'
import topPanel from '../components/topPanel.vue'
import LoadingScreen from '../components/loadingScreen.vue'

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
    leftPanel,
    midPanel,
    rightPanel,
    topPanel
  },
  data() {
    return {
      appIsLoading: true
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
  <LoadingScreen id="loadingScreen" v-if="appIsLoading" :is-loading="appIsLoading" />
  <topPanel />
  <leftPanel />
  <midPanel />
  <rightPanel />
</template>
