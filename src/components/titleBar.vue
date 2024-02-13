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

<style>
.title {
  height: 30px;
  width: 100%;
  user-select: none;
  -webkit-app-region: drag;
}

#titleText {
  display: inline;
  vertical-align: middle;
  margin-left: 10px;
  font-weight: bold;
}

#titleBarBtns {
  display: flex;
}

#logo {
  height: 30px;
  width: 30px;
  margin-left: 10px;
  vertical-align: middle;
}
</style>

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
