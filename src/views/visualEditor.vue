<template>
  <div id="visualEditor" class="d-flex flex-column align-center justify-center h-100 w-100">
    <div class="visualEditorInner">
      <v-card class="visualEditorBtns pa-2 d-flex justify-center ">
        <v-menu class="singleFieldMenu">
          <template v-slot:activator="{ props }">
            <v-btn class="ma-1" variant="tonal" v-bind="props" text="Add Field" />
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
        <v-menu class="templateFieldMenu">
          <template v-slot:activator="{ props }">
            <v-btn class="ma-1" variant="tonal" v-bind="props" text="Add Template" />
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
      </v-card>
      <v-card class="visualEditorCard" flat>
        <div
          class="visualEditorTemplate"
          v-for="(template, index) in templates"
          :key="`template-${index}`"
        >
          <!-- <div
            class="visualEditorField"
            v-for="(field, fieldIndex) in template.fields"
            :key="`field-${fieldIndex}`"
          > -->
          <v-text-field
            class="visualEditorField"
            v-for="(field, fieldIndex) in template.fields"
            :key="`field-${fieldIndex}`"
            v-model="field.value"
            :label="field.props.label"
            color="primary"
            density="compact"
            variant="outlined"
            clearable
            :placeholder="field.props.placeholder"
            append-inner-icon="mdi-delete"
            @click:appendInner="removeField(index, fieldIndex)"
          >
            <template v-slot:append v-if="field.props.type === 'color'">
              <v-menu :close-on-content-click="false">
                <template v-slot:activator="{ props }">
                  <v-btn v-bind="props" icon="mdi-palette"></v-btn>
                </template>
                <v-color-picker v-model="field.value"></v-color-picker>
              </v-menu>
            </template>
          </v-text-field>
        </div>
        <!-- </div> -->
        <!-- <div class="visualEditorField" v-for="(field, index) in textFields" :key="`field-${index}`"> -->
        <v-text-field
          class="visualEditorField"
          v-for="(field, index) in textFields"
          :key="`field-${index}`"
          v-model="field.value"
          :label="field.props.label"
          color="primary"
          density="compact"
          variant="outlined"
          clearable
          :placeholder="field.props.placeholder"
          append-inner-icon="mdi-delete"
          @click:appendInner="removeTextField(index)"
        >
          <template v-slot:append v-if="field.props.type === 'color'">
            <v-menu :close-on-content-click="false">
              <template v-slot:activator="{ props }">
                <v-btn v-bind="props" icon="mdi-palette"></v-btn>
              </template>
              <v-color-picker v-model="field.value"></v-color-picker>
            </v-menu>
          </template>
        </v-text-field>
        <!-- </div> -->
        <v-card-actions>
          <v-btn color="primary" @click="save" text="Save" />
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<style scoped>
.visualEditorCard {
  overflow-y: auto;
  height: 100%;
  padding: 0 20px 60px 20px;
}
</style>

<script setup>
import { ref } from 'vue'
const textFields = ref([])
const templates = ref([])

const removeTextField = (index) => {
  textFields.value.splice(index, 1)
}

const removeField = (templateIndex, fieldIndex) => {
  templates.value[templateIndex].fields.splice(fieldIndex, 1)

  if (templates.value[templateIndex].fields.length === 0) {
    templates.value.splice(templateIndex, 1)
  }
}

const save = () => {
  console.log(textFields.value)
  try {
    window.nfAPI.saveOctdatVisual({
      textFields: textFields.value,
      templates: templates.value
    })
  } catch (e) {
    console.error(e)
  }
}
const textFieldOptions = [
  { type: 'id', label: 'ID', props: { label: 'id', placeholder: 'MyMod.Items.MyItem.Name' } },
  { type: 'type', label: 'Type', props: { label: 'type', placeholder: 'StackedItemType' } },
  { type: 'inherit', label: 'Inherit', props: { label: 'inherit', placeholder: '' } },
  { type: 'color', label: 'Color', props: { label: 'color', placeholder: '', type: 'color' } }
]

const templateOptions = [
  {
    label: 'Template 1',
    fields: [
      { label: 'id', placeholder: 'MyMod.Items.MyItem.Name' },
      { label: 'type', placeholder: 'StackedItemType' },
      { label: 'inherit', placeholder: '' },
      { label: 'color', placeholder: '', type: 'color' }
    ]
  },
  {
    label: 'Info Template',
    fields: [
      { label: 'name', placeholder: 'MyMod Name' },
      { label: 'preview', placeholder: 'Preview.png' }
    ]
  }
]

const addTextField = (option) => {
  textFields.value.push({ value: '', props: option.props })
}

const addTemplate = (option) => {
  const newTemplate = {
    fields: option.fields.map((field) => ({ value: '', props: field }))
  }
  templates.value.push(newTemplate)
}
</script>
