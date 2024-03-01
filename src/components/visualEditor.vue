<template>
  <div id="visualEditor">
    <div class="visualEditorInner">
      <v-container class="visualEditorContainer pa-0">
        <v-card class="visualEditorCard pa-3">
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn class="mb-2" variant="tonal" v-bind="props" text="Add Field" />
            </template>
            <v-list>
              <v-list-item
                v-for="(option, index) in textFieldOptions"
                :key="`option-${index}`"
                @click="addTextField(option)"
              >
                <v-list-item-title>{{ option.label }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn class="mb-2" variant="tonal" v-bind="props" text="Add Template" />
            </template>
            <v-list>
              <v-list-item
                v-for="(option, index) in templateOptions"
                :key="`option-${index}`"
                @click="addTemplate(option)"
              >
                <v-list-item-title>{{ option.label }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <div class="visualEditorField" v-for="(field, index) in textFields" :key="`field-${index}`">
            <v-text-field
              v-model="field.value"
              :label="field.props.label"
              color="primary"
              density="compact"
              variant="outlined"
              clearable
              single-line
              :placeholder="field.props.placeholder"
              append-inner-icon="mdi-delete"
              @click:append-inner="removeField(index)"
            ></v-text-field>
          </div>
        </v-card>
      </v-container>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue'

const removeField = (index) => {
  textFields.value.splice(index, 1)
}

const textFields = ref([
  { value: '', props: { label: 'ID', placeholder: 'MyMod.Items.MyItem.Name' } },
  { value: '', props: { label: 'Type', placeholder: 'StackedItemType' } },
  { value: '', props: { label: 'Inherit', placeholder: '' } }
])

const textFieldOptions = [
  { type: 'id', label: 'ID', props: { label: 'ID', placeholder: 'MyMod.Items.MyItem.Name' } },
  { type: 'type', label: 'Type', props: { label: 'Type', placeholder: 'StackedItemType' } },
  { type: 'inherit', label: 'Inherit', props: { label: 'Inherit', placeholder: '' } }
]

const templateOptions = [
  { type: 'template', label: 'Template', props: { label: 'Template', placeholder: 'MyMod.Templates.MyTemplate' } }
]

const addTextField = (option) => {
  textFields.value.push({ value: '', props: option.props })
}

const addTemplate = (option) => {
  textFields.value.push({ value: '', props: option.props })
}


</script>
