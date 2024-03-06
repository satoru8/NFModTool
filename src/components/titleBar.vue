<template>
  <div id="titleBar">
    <TitleMenu title="File" :menuItems="fileMenuItems" @select="handleMenuSelect" />
    <!-- <TitleMenu title="Edit" :menuItems="editMenuItems" @select="handleMenuSelect" /> -->

    <div class="title">
      <span id="titleText">{{ title }}</span>
      <img id="logo" :src="logoSrc" alt="NFModTool" />
    </div>

    <v-container class="d-flex align-center v-col pa-0">
      <TitleMenu :prependIcon="'mdi-dots-vertical'" :menuItems="tools" @select="handleMenuSelect" />

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
})

const fileMenuItems = [
  { id: 1, title: 'New File' },
  // { id: 2, title: 'New Window' },
  // { id: 3, title: 'Open Folder' },
  { id: 4, title: 'Save All' }
]

// const editMenuItems = [
//   { id: 5, title: 'Undo' },
//   { id: 6, title: 'Redo' },
//   { id: 7, title: 'Copy' },
//   { id: 8, title: 'Paste' }
// ]

const tools = [
  { id: 9, title: 'Help', icon: 'mdi-help-circle', action: 'help', class: 'toolsBtn helpBtn' },
  {
    id: 10,
    title: 'Dev Tools',
    icon: 'mdi-code-braces',
    action: 'devTools',
    class: 'toolsBtn devToolsBtn'
  }
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
    8: 'Paste',
    9: 'Help',
    10: 'Dev Tools'
  }

  if (itemId === 9) {
    window.electronAPI.openHelp()
  } else if (itemId === 10) {
    window.electronAPI.openDevTools()
  }

  console.log(actions[itemId])
}

const emitEvent = (action) => {
  const actions = {
    close: 'closeWindow',
    minimize: 'minimizeWindow',
    maximize: 'maximizeWindow'
  }

  const apiFunction = window.electronAPI[actions[action]]

  if (apiFunction) {
    apiFunction()
  } else {
    console.error(`Invalid action: ${action}`)
  }
}
</script>
