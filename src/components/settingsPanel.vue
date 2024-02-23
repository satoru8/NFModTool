<template>
  <div id="settingsPanel">
    <div class="settingsPanelInner">
      <v-container class="settingsContainer pa-0">
        <p>Octdat Folder: {{ setting2 }}</p>
        <v-card class="settingsCard">
          <v-container>
            <v-row>
              <v-text-field color="primary" label="NF Mod Folder" v-model="setting1"></v-text-field>
            </v-row>
            <v-row>
              <v-text-field color="primary" label="NF Octdat Folder" v-model="setting2"></v-text-field>
            </v-row>
          </v-container>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="saveSettings" color="primary">Save</v-btn>
             <!-- reset settings -->
            <v-btn @click="resetSettings" textarea color="primary">Reset</v-btn>
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
      setting1: '',
      setting2: ''
    }
  },
  methods: {
    async saveSettings() {
      window.electronAPI.saveSettings({ setting1: this.setting1, setting2: this.setting2 });
    },
    async loadSettings() {
      const settings = await window.electronAPI.loadSettings();
      this.setting1 = settings.setting1 || '';
      this.setting2 = settings.setting2 || '';
    },
    resetSettings() {
      window.electronAPI.loadSettings();
      this.loadSettings();
      console.log('Settings reset.');
    }
  },
  mounted() {
    this.loadSettings()
  }
}
</script>
