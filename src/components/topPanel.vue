<template>
  <div id="topPanel">
    <div class="topPanelInner">
      <titlebar />
      <h1 class="text-center">Top Component</h1>
      <!-- Icon test -->
      <v-icon icon="mdi-plus" color="primary"></v-icon>
      <v-icon icon="$vuetify" color="primary"></v-icon>
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
