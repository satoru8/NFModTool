<template>
  <v-menu
    class="contextMenu"
    v-model="contextMenu.show"
    :position-x="contextMenu.x"
    :position-y="contextMenu.y"
  >
    <v-list>
      <v-list-item @click="handleMenuItemClick('Option1')">
        <v-list-item-title>Option 1</v-list-item-title>
      </v-list-item>
      <v-list-item @click="handleMenuItemClick('Option2')">
        <v-list-item-title>Option 2</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  data() {
    return {
      contextMenu: {
        show: false,
        x: 0,
        y: 0
      }
    }
  },
  methods: {
    showContextMenu(event) {
      event.preventDefault()
      this.contextMenu.show = true
      this.contextMenu.x = event.clientX
      this.contextMenu.y = event.clientY
    },
    hideContextMenu() {
      this.contextMenu.show = false
    },
    handleMenuItemClick(option) {
      console.log(`Clicked ${option}`)
      this.hideContextMenu()
    }
  },
  mounted() {
    document.addEventListener('contextmenu', this.showContextMenu)
    document.addEventListener('click', this.hideContextMenu)
  },
  beforeUnmount() {
    document.removeEventListener('contextmenu', this.showContextMenu)
    document.removeEventListener('click', this.hideContextMenu)
  }
}
</script>

<style>
.contextMenu {
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 2;
}
</style>
