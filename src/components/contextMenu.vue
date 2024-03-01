<template>
  <v-menu
    class="contextMenu"
    v-model="contextMenu.show"
    :position-x="contextMenu.x"
    :position-y="contextMenu.y"
    :style="{ left: contextMenu.x + 'px', top: contextMenu.y + 'px' }"
  >
    <v-list class="contextMenuList">
      <v-list-item @click="handleMenuItemClick('Option1')">
        <v-list-item-title>Option 1</v-list-item-title>
      </v-list-item>
      <v-list-item @click="handleMenuItemClick('Option2')">
        <v-list-item-title>Option 2</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps(['showContextMenu'])
const emits = defineEmits(['option-clicked'])

const contextMenu = ref({
  show: false,
  x: 0,
  y: 0
})

const handleMenuItemClick = (option) => {
  console.log(`Clicked ${option}`)
  contextMenu.value.show = false
  emits('option-clicked', option)
}

onMounted(() => {
  document.addEventListener('contextmenu', props.showContextMenu)
})

onBeforeUnmount(() => {
  document.removeEventListener('contextmenu', props.showContextMenu)
})
</script>
