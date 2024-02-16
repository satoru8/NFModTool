<template>
  <div id="rightPanel">
    <div class="rightPanelInner">
      <v-card class="h-100">
        <!-- <div class="d-flex flex-column"> -->
          <v-tabs v-model="tab" direction="horizontal" color="primary">
            <v-tab value="tab1">Tab 1</v-tab>
            <v-tab value="tab2">Tab 2</v-tab>
            <v-tab value="tab3">Tab 3</v-tab>
            <v-tab value="tab4">Tab 4</v-tab>
          </v-tabs>
          <v-window v-model="tab">
            <v-window-item value="tab1">
              <v-card flat>
                <v-card-text>
                  <FileInput />
                </v-card-text>
              </v-card>
            </v-window-item>
            <v-window-item value="tab2">
              <v-card flat>
                <v-card-text>
                  <v-btn @click="testAlert" color="primary" text="Test Alert" size="large" />
                  <CustomAlert title="Attention Required" message="Important message here!" v-model="showAlert" />
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
        <!-- </div> -->
      </v-card>
    </div>
  </div>
</template>

<script>
import FileInput from './fileInput.vue'
import CustomAlert from './customAlert.vue'

export default {
  components: {
    FileInput,
    CustomAlert
  },
  data() {
    return {
      tab: 'tab1',
      showAlert: false
    }
  },
  methods: {
    testAlert() {
      this.showAlert = true
    }
  }
}
</script>
