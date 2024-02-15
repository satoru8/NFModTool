<template>
  <div id="rightPanel">
    <div class="rightPanelInner">
      <!-- <h1>Right Component</h1> -->
      <v-card class="h-100">
        <div class="d-flex flex-column">
          <v-tabs v-model="tab" direction="horizontal" color="primary">
            <v-tab value="tab1">Option 1</v-tab>
            <v-tab value="tab2">Option 2</v-tab>
            <v-tab value="tab3">Option 3</v-tab>
            <v-tab value="tab4">Option 4</v-tab>
          </v-tabs>
          <v-window v-model="tab">
            <v-window-item value="tab1">
              <v-card flat>
                <v-card-text>
                  <!-- <input type="file" id="fileInput" ref="fileInput" /> -->
                  <fileInput />
                </v-card-text>
              </v-card>
            </v-window-item>
            <v-window-item value="tab2">
              <v-card flat>
                <v-card-text>
                  <p>test</p>
                </v-card-text>
              </v-card>
            </v-window-item>
            <v-window-item value="tab3">
              <v-card flat>
                <v-card-text>
                  <p>test</p>
                </v-card-text>
              </v-card>
            </v-window-item>
            <v-window-item value="tab4">
              <v-card flat>
                <v-card-text>
                  <p>test</p>
                </v-card-text>
              </v-card>
            </v-window-item>
          </v-window>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    tab: 'tab1'
  })
}
</script>

<script setup>
import fileInput from './fileInput.vue'
</script>
