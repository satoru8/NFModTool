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

defineProps(['title', 'logoSrc', 'buttons'])

const { emit } = defineEmits([
  'closeWindow',
  'minimizeWindow',
  'maximizeWindow',
  'openHelp',
  'openDevTools'
])

const emitEvent = (action) => {
  if (action === 'close') emit('closeWindow')
  else if (action === 'minimize') emit('minimizeWindow')
  else if (action === 'maximize') emit('maximizeWindow')
  else if (action === 'help') emit('openHelp')
  else if (action === 'devTools') emit('openDevTools')
}

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
</script>
