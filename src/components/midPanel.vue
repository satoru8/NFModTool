<template>
  <div id="midPanel">
    <div class="midPanelInner" ref="editorContainer"></div>
  </div>
</template>

<script>
import { createEditor } from '../js/monacoSetup.js'
import { editorManager } from '../js/editorManager'

export default {
  name: 'OctdatEditor',
  async mounted() {
    const editorId = 'mainEditor'
    try {
      this.editor = await createEditor(this.$refs.editorContainer, {}, editorId)
      console.log(`Monaco Setup Complete. Editor Instance for ID ${editorId}`, editorManager.getEditor(editorId))
    } catch (error) {
      console.error('Failed to create editor', error)
    }
  },
  beforeUnmount() {
    const editorId = 'mainEditor'
    editorManager.removeEditor(editorId)
  }
}
</script>
