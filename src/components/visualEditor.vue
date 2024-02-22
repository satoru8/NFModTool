<template>
  <div id="visualEditor">
    <div class="visualEditorInner">
      <v-container v-model="showVisual" class="visualEditorContainer pa-0">
        <v-card class="visualEditorCard">
        </v-card>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VisualEditor',
  data() {
    return {
      showVisual: false
    }
  },
  methods: {
    // openVisual() {
    //   this.showVisual = true
    // },
    // closeVisual() {
    //   this.showVisual = false
    // }
  },
  // mounted() {
  //   this.openVisual()
  //}
}
</script>
