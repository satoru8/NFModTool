<template>
  <v-container v-if="isLoading" fill-height>
    <v-row justify="center">
      <v-col cols="auto">
        <v-progress-circular indeterminate color="primary" size="60"></v-progress-circular>
        <h4 class="mt-3">Loading...</h4>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'LoadingScreen',
  props: {
    isLoading: {
      type: Boolean,
      required: true
    }
  }
}
</script>
