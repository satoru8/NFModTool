<template>
  <div id="settingsPanel">
    <div class="settingsPanelInner">
      <v-container class="settingsContainer pa-0">
        <v-card class="settingsCard pa-2">
          <v-container>
            <v-row>
              <v-text-field
                append-inner-icon="mdi-folder"
                label="NF Mod Folder"
                v-model="modFolderSetting"
                variant="outlined"
                color="secondary"
                @click:appendInner="selectFolder('modFolderSetting')"
              />
            </v-row>
            <v-row>
              <v-text-field
                append-inner-icon="mdi-folder"
                label="NF Octdat Folder"
                v-model="octdatFolderSetting"
                variant="outlined"
                color="secondary"
                @click:appendInner="selectFolder('octdatFolderSetting')"
              />
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

const modFolderSetting = ref('')
const octdatFolderSetting = ref('')

const selectFolder = (path) => {
  window.electronAPI.selectFolder(path).then((selectedPath) => {
    if (selectedPath) {
      if (path === 'modFolderSetting') {
        modFolderSetting.value = selectedPath
      }
      if (path === 'octdatFolderSetting') {
        octdatFolderSetting.value = selectedPath
      }
    }
  })
}

const saveSettings = async () => {
  window.electronAPI.saveSettings({
    modFolderSetting: modFolderSetting.value,
    octdatFolderSetting: octdatFolderSetting.value
  })
}

const loadSettings = async () => {
  const settings = await window.electronAPI.loadSettings()
  modFolderSetting.value = settings.modFolderSetting || ''
  octdatFolderSetting.value = settings.octdatFolderSetting || ''
}

const resetSettings = () => {
  loadSettings()
  console.log('Settings reset.')
}

onMounted(() => {
  loadSettings()
})
</script>
