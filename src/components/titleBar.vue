<template>
  <div id="titleBar">
    <div class="title">
      <span id="titleText">{{ title }}</span>
      <img id="logo" :src="logoSrc" alt="NFModTool" />
    </div>
    <v-container class="d-flex align-center v-col pa-0">
      <v-btn
        variant="text"
        size="small"
        v-for="button in buttons"
        :class="button.class"
        :key="button.id"
        @click="emitEvent(button.action)"
      >
        <v-icon size="large" :icon="button.symbol" />
      </v-btn>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'TitleBar',
  props: {
    title: {
      type: String,
      default: 'NF Mod Tool'
    },
    logoSrc: {
      type: String,
      default: './logo.png'
    },
    buttons: {
      type: Array,
      default: () => [
        { id: 'min', class: 'titleBarBtn min', symbol: 'mdi-window-minimize', action: 'minimize' },
        { id: 'max', class: 'titleBarBtn max', symbol: 'mdi-fullscreen', action: 'maximize' },
        { id: 'close', class: 'titleBarBtn close', symbol: 'mdi-window-close', action: 'close' }
      ]
    }
  },
  methods: {
    emitEvent(action) {
      if (action === 'close') this.closeWindow()
      else if (action === 'minimize') this.minimizeWindow()
      else if (action === 'maximize') this.maximizeWindow()
    },
    closeWindow() {
      window.electronAPI.closeWindow()
    },
    minimizeWindow() {
      window.electronAPI.minimizeWindow()
    },
    maximizeWindow() {
      window.electronAPI.maximizeWindow()
    }
  }
}
</script>
