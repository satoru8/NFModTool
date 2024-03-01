<template>
  <div id="titleBar">
    <TitleMenu title="File" :menuItems="fileMenuItems" @select="handleMenuSelect" />
    <TitleMenu title="Edit" :menuItems="editMenuItems" @select="handleMenuSelect" />

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

<script setup>
import TitleMenu from './titleMenu.vue'

defineProps({
  title: {
    type: String,
    default: 'Default Title'
  },
  logoSrc: {
    type: String,
    default: '/path/to/default/logo.png'
  },
  buttons: {
    type: Array,
    default: () => [
      { id: 'help', class: 'titleBarBtn help', symbol: 'mdi-help-circle', action: 'help' },
      { id: 'devTools', class: 'titleBarBtn dev', symbol: 'mdi-code-braces', action: 'devTools' },
      { id: 'min', class: 'titleBarBtn min', symbol: 'mdi-window-minimize', action: 'minimize' },
      { id: 'max', class: 'titleBarBtn max', symbol: 'mdi-fullscreen', action: 'maximize' },
      { id: 'close', class: 'titleBarBtn close', symbol: 'mdi-window-close', action: 'close' }
    ]
  }
})

const fileMenuItems = [
  { id: 1, title: 'New File' },
  { id: 2, title: 'New Window' },
  { id: 3, title: 'Open Folder' },
  { id: 4, title: 'Save' }
]

const editMenuItems = [
  { id: 5, title: 'Undo' },
  { id: 6, title: 'Redo' },
  { id: 7, title: 'Copy' },
  { id: 8, title: 'Paste' }
]

const handleMenuSelect = (itemId) => {
  const actions = {
    1: 'New File',
    2: 'New Window',
    3: 'Open Folder',
    4: 'Save',
    5: 'Undo',
    6: 'Redo',
    7: 'Copy',
    8: 'Paste'
  }

  console.log(actions[itemId])
}

const emitEvent = (action) => {
  if (action === 'close') window.electronAPI.closeWindow()
  else if (action === 'minimize') window.electronAPI.minimizeWindow()
  else if (action === 'maximize') window.electronAPI.maximizeWindow()
  else if (action === 'help') window.electronAPI.openHelp()
  else if (action === 'devTools') window.electronAPI.openDevTools()
}
</script>
