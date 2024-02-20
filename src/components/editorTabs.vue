<template>

    <v-card flat>

      <v-tabs v-model="selectedTab" background-color="transparent" show-arrows slider-color="primary">

        <v-tab v-for="tab in tabs" :value="tab.id" :class="tab.id" :key="tab.id" @click="selectTab(tab.id)">
          {{ tab.name }}
        </v-tab>
        
        <v-tab prepend-icon="mdi-plus" @click="addTab" density="comfortable" size="small" slim variant="flat" width="10"/>

      </v-tabs>

    </v-card>

  </template>
  
  <script>
  export default {
    props: {
      tabs: Array,
      activeTab: String,
    },
    data() {
      return {
        selectedTab: this.activeTab
      };
    },
    watch: {
      activeTab(newVal) {
        this.selectedTab = newVal;
      },
    },
    methods: {
      selectTab(tabId) {
        this.$emit('switchTab', tabId);
      },
      addTab() {
        this.$emit('addTab');
      },
    },
  };
  </script>
  