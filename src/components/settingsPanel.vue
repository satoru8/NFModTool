<template>
  <div id="settingsPanel">
    <div class="settingsPanelInner">
      <v-container v-model="showSettings" class="pa-0 w-100">
        <v-card class="w-100">
          <v-card-text>
            <v-form>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field label="Setting 1" v-model="setting1"></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-text-field label="Setting 2" v-model="setting2"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-card-text>
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
      setting1: '',
      setting2: ''
    }
  },
  methods: {
    openSettings() {
      this.showSettings = true
    },
    closeSettings() {
      this.showSettings = false
    },
    saveSettings() {
      // example: this.$emit('settings-saved', { setting1: this.setting1, setting2: this.setting2 });
    }
  },
  mounted() {
    this.openSettings()
  },
  watch: {
    showSettings(newValue) {
      console.log('showSettings:', newValue)
    }
  }
}
</script>
