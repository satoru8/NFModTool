<template>
  <div id="settingsPanel">
    <div class="settingsPanelInner">
      <v-container class="settingsContainer pa-0">
        <v-card class="settingsCard">
          <v-container>
            <v-row>
              <v-text-field color="primary" label="NF Mod Folder" v-model="setting1" />
            </v-row>
            <v-row>
              <v-text-field color="primary" label="NF Octdat Folder" v-model="setting2" />
            </v-row>
          </v-container>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="saveSettings" color="primary" text="Save" />

            <v-tooltip text="Load Saved Settings">
              <template v-slot:activator="{ props }">
                <v-btn @click="resetSettings" color="primary" text="Reset" v-bind="props" />
              </template>
            </v-tooltip>
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
      setting2: '',
      mainColor: ''
    }
  },
  methods: {
    async saveSettings() {
      window.electronAPI.saveSettings({
        setting1: this.setting1,
        setting2: this.setting2,
        mainColor: this.mainColor
      })
    },
    async loadSettings() {
      const settings = await window.electronAPI.loadSettings()
      this.setting1 = settings.setting1 || ''
      this.setting2 = settings.setting2 || ''
      this.mainColor = settings.mainColor || ''
    },
    resetSettings() {
      window.electronAPI.loadSettings()
      this.loadSettings()
      console.log('Settings reset.')
    }
  },
  mounted() {
    this.loadSettings()
  }
}
</script>
