<template>
  <v-overlay :value="showAlert">
    <v-container fill-height>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="6">
          <v-alert :value="showAlert" type="info" dismissible @input="closeAlert">
            {{ alertMessage }}
          </v-alert>
        </v-col>
      </v-row>
    </v-container>
  </v-overlay>
</template>

<script>
export default {
  data() {
    return {
      showAlert: false,
      alertMessage: ''
    }
  },
  methods: {
    openAlert(message) {
      this.alertMessage = message
      this.showAlert = true
    },
    closeAlert() {
      this.showAlert = false
      this.alertMessage = ''
    }
  }
}
</script>
