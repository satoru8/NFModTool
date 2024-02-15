<template>
  <div id="titleBar">
    <span id="titleText">{{ title }}</span>
    <img id="logo" :src="logoSrc" alt="NFModTool" />
    <nav id="titleBarBtns">
      <button v-for="button in buttons" :id="button.tag" :key="button.id" @click="emitEvent(button.action)">
        {{ button.symbol }}
      </button>
    </nav>
  </div>
</template>

<!-- <template>
  <div class="title">
    <span id="titleText">NF Mod Tool</span>
    <img id="logo" src="../assets/logo.png" alt="NFModTool" />
  </div>
  <div id="titleBarBtns">
    <button id="min" @click="minimizeWindow">-</button>
    <button id="max" @click="maximizeWindow">+</button>
    <button id="close" @click="closeWindow">x</button>
  </div>
</template> -->

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
      required: true,
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
    close() {
      window.electronAPI.closeWindow()
    },
    minimize() {
      window.electronAPI.minimizeWindow()
    },
    maximize() {
      window.electronAPI.maximizeWindow()
    }
  }
}
</script>
