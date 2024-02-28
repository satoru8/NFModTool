<template>
  <v-dialog v-model="showAlert" max-width="600">
    <v-card>
      <v-alert
        :type="alertType"
        :color="color"
        :border="border"
        :elevation="elevation"
        :icon="icon"
        :title="title"
        :variant="variant"
        :density="density"
      >
        <div v-html="message"></div>
      </v-alert>
      <v-btn :color="btnColor" :variant="btnVariant" :text="closeLabel" @click="closeAlert"></v-btn>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  title: { type: String, default: null },
  message: { type: String, required: true },
  btnVariant: { type: String, default: 'plain' },
  btnColor: { type: String, default: null },
  icon: { type: String, default: 'mdi-alert' },
  closeLabel: { type: String, default: 'Close' },
  alertType: { type: String, default: 'info' },
  variant: { type: String, default: 'tonal' },
  color: { type: String, default: null },
  border: { type: String, default: null },
  elevation: { type: [Number, String], default: null },
  density: { type: String, default: 'default' }
})

const showAlert = ref(true)

const emit = defineEmits(['closeAlert'])

const closeAlert = () => {
  showAlert.value = false
  emit('closeAlert')
}
</script>
