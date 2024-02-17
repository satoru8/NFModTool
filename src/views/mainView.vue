<script>
import leftPanel from '../components/leftPanel.vue'
import midPanel from '../components/midPanel.vue'
import rightPanel from '../components/rightPanel.vue'
import topPanel from '../components/topPanel.vue'
import LoadingScreen from '../components/loadingScreen.vue'

export default {
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
    window.electronAPI.loadingDone(() => {
      this.appIsLoading = false;
    });
  }
}
</script>

<template>
  <LoadingScreen v-if="appIsLoading" :is-loading="appIsLoading" />
  <topPanel />
  <leftPanel />
  <midPanel />
  <rightPanel />
</template>
