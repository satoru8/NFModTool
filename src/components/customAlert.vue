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

<script>
export default {
  name: 'CustomAlert',
  props: {
    title: {
      type: String,
      default: null
    },
    message: {
      type: String,
      required: true
    },
    btnVariant: {
      type: String,
      default: 'plain',
      validator: (value) => ['outlined', 'plain', 'prominent', 'tonal'].includes(value)
    },
    btnColor: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: 'mdi-alert'
    },
    closeLabel: {
      type: String,
      default: 'Close'
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
  },
  methods: {
    closeAlert() {
      this.showAlert = false
      this.$emit('closeAlert')
    }
  }
}
</script>
