
// Monaco Editor setup and instance creation

import * as monaco from 'monaco-editor';

// Register the octdat language
monaco.languages.register({ id: 'octdat' });

// Define syntax highlighting rules for 'octdat' language
monaco.languages.setMonarchTokensProvider('octdat', {
    tokenizer: {
      root: [
        // Comments
        [/\/\/.*$/, 'comment'],
        [/\[info\]/, 'custom-info'],
        [/\[script\]/, 'custom-script'],
        // Other token rules...
      ],
    },
  });
  

// Optionally, define additional language features
monaco.languages.registerCompletionItemProvider('octdat', {
  provideCompletionItems: (model, position) => {
    // Your autocompletion logic here
    return {
      suggestions: [
        { label: 'keyword1', kind: monaco.languages.CompletionItemKind.Keyword, insertText: 'keyword1' },
        { label: 'keyword2', kind: monaco.languages.CompletionItemKind.Keyword, insertText: 'keyword2' },
        // Add more suggestions as needed
      ]
    };
  }
});

// Configure Monaco environment for worker
window.MonacoEnvironment = {
  getWorkerUrl: function (moduleId, label) {
    if (label === 'octdat') {
      return './js.worker.bundle.js';
    }
  }
};

// Register theme for octdat
monaco.editor.defineTheme('octdatTheme', {
  base: 'vs-dark',
  inherit: true
});


// Create the editor instance
// const editor = monaco.editor.create(document.getElementById('editorContainer'), {
//   value: '...test',
//   language: 'octdat',
//   theme: 'octdatTheme',
// });