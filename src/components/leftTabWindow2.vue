<template>
  <v-card flat class="leftPanelCard">
    <v-card-text>
      <span class="text-h6">Testing Area</span>

      <v-spacer class="my-2" />

      <v-text-field
        label="Text Field"
        v-model="textFieldValue"
        :counter="20"
        :rules="textFieldRules"
      ></v-text-field>

      <v-row v-if="showMessages" class="mt-4" v-for="(message, index) in messages" :key="index">
        <v-col>
          <v-row>
            <span>{{ message.text }}</span>
          </v-row>
          <v-row>
            <span class="caption">{{ message.timestamp }}</span>
          </v-row>
          <v-row>
            <v-btn icon @click="editMessage(index)">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn icon @click="deleteMessage(index)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-row>
        </v-col>
      </v-row>

      <v-row>
        <v-spacer />

        <v-btn color="primary" @click="addMessage">Add message</v-btn>

        <v-spacer />

        <v-btn color="error" @click="clearMessages">Clear messages</v-btn>

        <v-spacer />

        <v-btn color="primary" @click="toggleMessages">Toggle messages</v-btn>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'Tab2Content',
  data() {
    return {
      textFieldValue: '',
      showMessages: false,
      messages: [],
      textFieldRules: [
        (v) => !!v || 'Text is required',
        (v) => v.length <= 20 || 'Text must be less than 20 characters',
      ],
    };
  },
  methods: {
    addMessage() {
      const timestamp = new Date().toLocaleTimeString();
      this.messages.push({ text: this.textFieldValue, timestamp });
      this.textFieldValue = '';
    },
    clearMessages() {
      this.messages = [];
    },
    toggleMessages() {
      this.showMessages = !this.showMessages;
    },
    editMessage(index) {
      // Implement edit functionality
      this.messages[index].text = 'Edited message';
    },
    deleteMessage(index) {
      // Implement delete functionality
      this.messages.splice(index, 1);
    },
  },
};
</script>
