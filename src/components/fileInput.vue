<template>
  <CustomAlert
    icon="mdi-close-octagon"
    color="error"
    title="Invalid File Type"
    message="Invalid file type. Only .octdat or .octdat.bak files are allowed."
    v-model="showAlert"
    @closeAlert="closeAlert"
  />
  <v-file-input
    v-model="files"
    @change="onFileChange"
    @dragover.prevent="onDragOver"
    @drop.prevent="onDrop"
    :multiple="multiple"
    :color="color"
    :counter="counter"
    :label="label"
    :prepend-icon="icon"
    :variant="variant"
    :show-size="1000"
    accept=".octdat, .octdat.bak"
  >
    <template v-slot:selection="{ fileNames }">
      <template v-for="(fileName, index) in fileNames" :key="fileName">
        <v-chip v-if="index < 2" :color="color" label size="small" class="me-2">
          {{ fileName }}
        </v-chip>
        <span v-else-if="index === 2" class="text-overline text-grey-darken-3 mx-2">
          +{{ files.length - 2 }} File(s)
        </span>
      </template>
    </template>
  </v-file-input>
</template>

<script setup>
import { ref } from 'vue'
import CustomAlert from './customAlert.vue'

const { multiple, color, counter, icon, label, variant } = defineProps({
  multiple: Boolean,
  color: String,
  counter: Boolean,
  icon: String,
  label: String,
  variant: {
    type: String,
    default: 'outlined',
    validator: (value) => ['outlined', 'underlined', 'filled', 'plain'].includes(value)
  }
})

const emit = defineEmits(['fileChanged'])

const files = ref([])
const showAlert = ref(false)

const closeAlert = () => {
  showAlert.value = false
}

const onFileChange = () => {
  if (files.value.length > 0) {
    const file = files.value[0]
    if (!isValidFile(file)) {
      showAlert.value = true
      return
    }
    readFile(file)
  }
}

const onDragOver = (event) => {
  event.preventDefault()
}

const onDrop = (event) => {
  event.preventDefault()
  event.stopPropagation()

  const filesDropped = event.dataTransfer.files
  if (filesDropped.length > 0) {
    const file = filesDropped[0]
    if (isValidFile(file)) {
      readFile(file)
    } else {
      showAlert.value = true
    }
  }
}

const isValidFile = (file) => {
  const fileExtension = file.name.split('.').pop().toLowerCase()
  return fileExtension === 'octdat' || fileExtension === 'octdat.bak'
}

const readFile = (file) => {
  const reader = new FileReader()
  reader.onload = (event) => {
    const fileContent = event.target.result
    emit('fileChanged', fileContent)
  }
  reader.readAsText(file)
}
</script>
