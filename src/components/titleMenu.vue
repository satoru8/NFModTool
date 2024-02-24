<template>
  <div class="d-flex justify-space-around titleBar-menu">
    <v-btn color="transparent" elevation="0" density="comfortable" class="text-capitalize">
      {{ title }}

      <v-menu activator="parent">
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

<script>
export default {
  name: 'TitleMenu',
  props: {
    title: String,
    menuItems: Array
  },
  methods: {
    handleMenuSelect(itemId) {
      this.$emit('select', itemId)
    }
  }
}
</script>
