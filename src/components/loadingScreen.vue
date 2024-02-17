<template>
  <v-container class="pa-0">
    <v-row class="h-100 ma-0" align="center">
      <v-col class="text-center" >
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