<template>
  <div class="d-flex justify-space-around titleBarMenu">
    <v-btn
      :prepend-icon="prependIcon"
      color="transparent"
      elevation="0"
      density="comfortable"
      class="text-capitalize"
    >
      {{ title }}

      <v-menu activator="parent" v-if="menuItems && menuItems.length">
        <template v-slot="{ items }">
          <v-list>
            <v-list-item
              v-for="item in menuItems"
              :key="item.id"
              :prepend-icon="item.icon"
              :class="item.class"
              @click="handleMenuSelect(item.id)"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </template>
      </v-menu>
    </v-btn>
  </div>
</template>

<script setup>
defineProps(['title', 'menuItems', 'prependIcon'])
const emit = defineEmits(['select'])

const handleMenuSelect = (itemId) => {
  emit('select', itemId)
}
</script>
