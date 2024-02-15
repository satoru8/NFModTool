<template>
  <div id="topPanel">
    <div class="topPanelInner">
      <titlebar />
      <h1>Top Component</h1>
    </div>
  </div>
</template>

<script>
import titlebar from '../components/titleBar.vue'

export default {
  name: 'TopPanel',
  components: {
    titlebar
  }
}
</script>
