<!--
  src\components\customAlert.vue

  Example: 
  <CustomAlert
    v-model="showAlert"
    title="Attention Required"
    message="Important message here!"
  />
-->

<template>
  <v-dialog v-model="showAlert" max-width="500">
    <v-card>
      <v-alert
        :type="alertType"
        :color="color"
        :border="border"
        :elevation="elevation"
        :closable="closable"
        :icon="icon"
        :close-label="closeLabel"
        :title="title"
        :variant="variant"
        :density="density"
      >
        {{ message }}
      </v-alert>
      <!-- <v-btn
          text="Close"
          @click="showAlert = false"
        ></v-btn> -->
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'CustomAlert',
  props: {
    message: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: 'mdi-alert'
    },
    closeLabel: {
      type: String,
      default: 'Close Alert'
    },
    alertType: {
      type: String,
      default: 'info',
      validator: (value) => ['success', 'info', 'warning', 'error'].includes(value)
    },
    variant: {
      type: String,
      default: 'tonal',
      validator: (value) => ['outlined', 'plain', 'prominent', 'tonal'].includes(value)
    },
    color: {
      type: String,
      default: null
    },
    border: {
      type: String,
      default: null
    },
    elevation: {
      type: [Number, String],
      default: null
    },
    title: {
      type: String,
      default: null
    },
    closable: {
      type: Boolean,
      default: false
    },
    density: {
      type: String,
      default: 'default',
      validator: (value) => ['default', 'compact', 'comfortable'].includes(value)
    }
  },
  data() {
    return {
      showAlert: true
    }
  }
}
</script>
