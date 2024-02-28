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

<script setup>
import { ref, onMounted } from 'vue'

const setting1 = ref('')
const setting2 = ref('')
const mainColor = ref('')

const saveSettings = async () => {
  window.electronAPI.saveSettings({
    setting1: setting1.value,
    setting2: setting2.value,
    mainColor: mainColor.value
  })
}

const loadSettings = async () => {
  const settings = await window.electronAPI.loadSettings()
  setting1.value = settings.setting1 || ''
  setting2.value = settings.setting2 || ''
  mainColor.value = settings.mainColor || ''
}

const resetSettings = () => {
  window.electronAPI.loadSettings()
  loadSettings()
  console.log('Settings reset.')
}

onMounted(() => {
  loadSettings()
})
</script>
