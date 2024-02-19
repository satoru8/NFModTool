<template>
  <div id="topPanel">
    <div class="topPanelInner">
      <titlebar />

      <v-card flat>
        <v-tabs v-model="tab" align-tabs="center" hide-slider fixed-tabs color="primary">
          <v-tab value="monaco" text="Monaco Editor" @click="changeTab('monaco')" />
          <v-tab value="visual" text="Visual Editor" @click="changeTab('visual')" />
          <v-tab value="settings" text="Settings" @click="changeTab('settings')" />
        </v-tabs>
      </v-card>

    </div>
  </div>
</template>

<script>
import titlebar from '../components/titleBar.vue'

export default {
  name: 'TopPanel',
  components: {
    titlebar
  },
  data() {
    return {
      tab: 'one'
    }
  },
  methods: {
    changeTab(tab) {
      this.tab = tab;
      this.$emit('tab-changed', tab);
      if (tab === 'settings') {
        this.$emit('settings-clicked');
      }
    }
  }
}
</script>
