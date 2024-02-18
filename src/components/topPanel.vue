<template>
  <div id="topPanel">
    <div class="topPanelInner">
      <titlebar />
      <v-icon icon="mdi-plus" color="primary" />
      <v-icon icon="$vuetify" color="primary" />
      <v-btn icon="mdi-dots-vertical" />
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
