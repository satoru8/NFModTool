<template>
  <div id="titleBar">
    <div class="title">
      <span id="titleText">{{ title }}</span>
      <img id="logo" :src="logoSrc" alt="NFModTool" />
    </div>
    <v-container class="d-flex justify-end align-center v-col-auto pa-0">
      <v-btn
        variant="tonal"
        size="small"
        v-for="button in buttons"
        :id="button.tag"
        :key="button.id"
        @click="emitEvent(button.action)"
      >
        {{ button.symbol }}
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
      default: '../src/assets/logo.png'
    },
    buttons: {
      type: Array,
      default: () => [
        { id: 'min', tag: 'min', symbol: '-', action: 'minimize' },
        { id: 'max', tag: 'max', symbol: '+', action: 'maximize' },
        { id: 'close', tag: 'close', symbol: 'x', action: 'close' }
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
