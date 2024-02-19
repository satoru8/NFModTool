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

<script>
import CustomAlert from './customAlert.vue'

export default {
  name: 'FileInput',
  emits: ['fileChanged'],
  components: {
    CustomAlert
  },
  props: {
    multiple: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'deep-purple-accent-4'
    },
    counter: {
      type: Boolean,
      default: true
    },
    icon: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: 'File'
    },
    variant: {
      type: String,
      default: 'outlined',
      validator: (value) => {
        return ['outlined', 'underlined', 'filled', 'plain'].includes(value)
      }
    }
  },
  data() {
    return {
      files: [],
      showAlert: false
    }
  },
  methods: {
    closeAlert() {
      this.showAlert = false
    },
    onFileChange() {
      if (this.files.length > 0) {
        const file = this.files[0]
        if (!this.isValidFile(file)) {
          this.showAlert = true
          return
        }
        this.readFile(file);
        // this.$emit('fileChanged', file)
      }
    },
    onDragOver(event) {
      event.preventDefault()
    },
    onDrop(event) {
      event.preventDefault()
      event.stopPropagation()

      const files = event.dataTransfer.files
      if (files.length > 0) {
        const file = files[0]
        if (this.isValidFile(file)) {
          this.readFile(file)
        } else {          
          this.showAlert = true
        }
      }
    },
    isValidFile(file) {
      const fileExtension = file.name.split('.').pop().toLowerCase()
      return fileExtension === 'octdat' || fileExtension === 'octdat.bak'
    },
    readFile(file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const fileContent = event.target.result
        this.$emit('fileChanged', fileContent)
      }
      reader.readAsText(file)
    }
  }
}
</script>
