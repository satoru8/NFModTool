<template>
    <v-card flat>
      <v-tabs v-model="selectedTab" background-color="transparent" show-arrows>
        <v-tab v-for="tab in tabs" :key="tab.id" @click="selectTab(tab.id)">
          {{ tab.name }}
        </v-tab>
        <v-tab>
          <v-btn icon @click="addTab">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-tab>
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
        selectedTab: this.activeTab,
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
  