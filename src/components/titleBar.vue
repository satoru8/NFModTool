<template>
  <div id="titleBar">
    <div class="d-flex justify-space-around">
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
        >
          Activator slot
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :value="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-btn
      color="primary"
    >
      Parent activator

      <v-menu activator="parent">
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            :value="index"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-btn>

    <v-btn
      id="menu-activator"
      color="primary"
    >
      Sibling activator
    </v-btn>

    <v-menu activator="#menu-activator">
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :value="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
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

<script>
export default {
  name: 'TitleBar',
  data() {
    return {
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
      // ... other data properties
    };
  },
  props: {
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
        { id: 'help', class: 'titleBarBtn help', symbol: 'mdi-help-circle', action: 'help' },
        { id: 'devTools', class: 'titleBarBtn dev', symbol: 'mdi-code-braces', action: 'devTools' },
        { id: 'min', class: 'titleBarBtn min', symbol: 'mdi-window-minimize', action: 'minimize' },
        { id: 'max', class: 'titleBarBtn max', symbol: 'mdi-fullscreen', action: 'maximize' },
        { id: 'close', class: 'titleBarBtn close', symbol: 'mdi-window-close', action: 'close' }
      ]
    }
  },
  methods: {
    emitEvent(action) {
      if (action === 'close') this.closeWindow();
      else if (action === 'minimize') this.minimizeWindow();
      else if (action === 'maximize') this.maximizeWindow();
      else if (action === 'help') this.openHelp();
      else if (action === 'devTools') this.openDevTools();
    },
    closeWindow() {
      window.electronAPI.closeWindow();
    },
    minimizeWindow() {
      window.electronAPI.minimizeWindow();
    },
    maximizeWindow() {
      window.electronAPI.maximizeWindow();
    },
    openHelp() {
     window.electronAPI.openHelp();
    },
    openDevTools() {
      window.electronAPI.openDevTools();
    }
  }
};
</script>
