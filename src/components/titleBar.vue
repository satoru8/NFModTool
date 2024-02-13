<template>
  <div class="title">
    <span id="titleText">NF Mod Tool</span>
    <img id="logo" src="../assets/logo.png" alt="NFModTool" />
  </div>
  <div id="titleBarBtns">
    <button id="min" @click="minimizeWindow">-</button>
    <button id="max" @click="maximizeWindow">+</button>
    <button id="close" @click="closeWindow">x</button>
  </div>
</template>

<script>
export default {
  name: 'TitleBar',
  methods: {
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
