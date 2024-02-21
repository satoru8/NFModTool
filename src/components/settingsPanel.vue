<template>
  <div id="settingsPanel">
    <div class="settingsPanelInner">
      <v-container v-model="showSettings" class="settingsContainer pa-0">
        <v-card class="settingsCard">
          <v-container>
            <v-row>
              <v-switch color="primary" label="Setting 1" v-model="setting1"></v-switch>
            </v-row>
            <v-row>
              <v-switch color="primary" label="Setting 2" v-model="setting2"></v-switch>
            </v-row>
          </v-container>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="saveSettings" color="primary">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SettingsPanel',
  data() {
    return {
      showSettings: false,
      setting1: false,
      setting2: false
    }
  },
  methods: {
    // toggleSettings() {
    //   this.showSettings = !this.showSettings
    // },
    // openSettings() {
    //   this.showSettings = true
    // },
    // closeSettings() {
    //   this.showSettings = false
    // },
    saveSettings() {
      // example: this.$emit('settings-saved', { setting1: this.setting1, setting2: this.setting2 });
    }
  },
  // mounted() {
  //   this.openSettings()
  // }
}
</script>
