<template>
  <v-container id="loadingScreen" class="pa-0" v-if="isLoading">
    <v-row class="h-100 ma-0" align="center">
      <v-col class="text-center">
        <v-img src="./logo.png" alt="NF Mod Tool" max-width="200" class="mx-auto mb-10" />

        <v-spacer class="ma-7 pa-7" />

        <v-progress-circular indeterminate color="primary" size="90" />
        <h2 class="mt-6"><span class="text-secondary">Loading...</span></h2>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
defineProps(['isLoading'])
</script>
