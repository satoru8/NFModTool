<template>
  <div class="midPanelInner" ref="editorContainer"></div>
</template>

<style>
.monaco-editor,
.cm-editor,
.midPanelInner {
  height: 100%;
  width: 100%;
}
</style>

<script>
import * as monaco from "monaco-editor";
import '../js/monacoSetup.js';

export default {
  name: 'OctdatEditor',
  data() {
    return {
      editor: null,
    };
  },
  
  mounted() {
    this.editor = monaco.editor.create(this.$refs.editorContainer, {
      value: `
{
  abstract
  id ModTest.Items.Armor.Steel
  type InstancedItemType
    inherit Oct.Items.Buffable
    alias Oct.Items.Armor.Steel
  
    outdoorDecayAfter = 24y
    autonomousPerMember = 1
  
  stats =
  [
    {
      type InstancedItemStat
      name = Warmth
      formula = QualityHalfDurability
            modifier = true
            round = .25
      min = .5
      max = 1.25
    }
  ]
    
    substances = 
    [
        <Oct.Items.Substances.Steel>
    ]
}
      `,
      language: 'octdat',
      theme: 'octdatTheme',
      staticEmbedding: true,
      minimap: { enabled: false },
      scrollBeyondLastLine: false,
      automaticLayout: true
    });
  },
  beforeUnmount() {
    if (this.editor) {
      this.editor.dispose();
    }
  }
}
</script>