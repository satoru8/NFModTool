<template>

    <v-card flat>

      <v-tabs class="editorTabs" v-model="selectedTab" slider-color="primary" show-arrows>

        <v-tab v-for="tab in tabs" :value="tab.id" :class="tab.id" :key="tab.id" @click="selectTab(tab.id)">
          {{ tab.name }}
        </v-tab>
        
        <v-tab class="addTab" prepend-icon="mdi-plus" @click="addTab" />

      </v-tabs>

    </v-card>

  </template>
  
  <script>
  export default {
    name: 'EditorTabs',
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
  