<template>
  <v-container v-if="showSetup" class="pa-6">
    <v-row class="h-100 ma-0" align="center">
      <v-col class="text-center">

        <h1 class="pa-3"><span class="text-primary">First Time Setup</span></h1>

        <v-spacer class="mt-7 pa-3" />

        <h3 class="mt-3 mb-3"><span class="text-secondary">Select your NF Mod Folder</span></h3>
        <v-text-field
          append-inner-icon="mdi-folder"
          label="NF Mod Folder"
          v-model="modFolderSetting"
          variant="outlined"
          color="secondary"
          @click:appendInner="selectFolder('modFolderSetting')"
        />

        <h3 class="mt-3 mb-3"><span class="text-secondary">Select the NF Octdat Folder</span></h3>
        <v-text-field
          append-inner-icon="mdi-folder"
          label="NF Octdat Folder"
          v-model="octdatFolderSetting"
          variant="outlined"
          color="secondary"
          @click:appendInner="selectFolder('octdatFolderSetting')"
        />

        <v-btn color="accent" class="mt-3 text-text" @click="completeSetup" text="Complete Setup" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const showSetup = ref('')

const emits = defineEmits(['setup-completed'])

const modFolderSetting = ref('')
const octdatFolderSetting = ref('')

const selectFolder = (path) => {
  window.nfAPI.selectFolder(path).then((selectedPath) => {
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

const completeSetup = () => {
  showSetup.value = false
  emits('setup-completed')
  window.nfAPI.saveSettings({
    modFolderSetting: modFolderSetting.value,
    octdatFolderSetting: octdatFolderSetting.value,
    setupCompleted: true
  })  
}

onMounted(() => {
  if (window.nfAPI.loadSettings('setupCompleted') === true) {
    showSetup.value = false
    console.log('Setup already completed.', showSetup.value);
  } else {
    showSetup.value = true
  }
})
</script>
