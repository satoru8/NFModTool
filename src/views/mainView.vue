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
      appIsLoading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.appIsLoading = false;
    }, 3000);
  },
};
</script>

<template>
  <!-- <div v-if="appIsLoading"> -->
    <LoadingScreen v-if="appIsLoading" :is-loading="appIsLoading" />
  <!-- </div> -->
  <topPanel />
  <leftPanel />
  <midPanel />
  <rightPanel />
</template>