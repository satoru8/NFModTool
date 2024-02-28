<template>
  <div class="d-flex justify-space-around titleBar-menu">
    <v-btn color="transparent" elevation="0" density="comfortable" class="text-capitalize">
      {{ title }}

      <v-menu activator="parent" v-if="menuItems && menuItems.length">
        <template v-slot="{ items }">
          <v-list>
            <v-list-item
              v-for="item in menuItems"
              :key="item.id"
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
const props = defineProps(['title', 'menuItems'])
const emit = defineEmits(['select'])

const handleMenuSelect = (itemId) => {
  emit('select', itemId)
}
</script>
