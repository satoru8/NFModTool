<template>
  <v-container class="pa-0">
    <v-row class="h-100 ma-0" align="center">
      <v-col class="text-center">
        <v-progress-circular v-if="isLoading" indeterminate color="primary" size="60" />
        <h4 v-if="isLoading" class="mt-3"><span class="text-primary">Loading...</span></h4>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
defineProps(['isLoading'])
</script>
