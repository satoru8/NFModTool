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

monaco.editor.defineTheme('octdatTheme', {
  base: 'vs-dark',
  inherit: true,
  rules: [
    // Add theme rules here
  ],
});

monaco.languages.setLanguageConfiguration('octdat', {
  brackets: [
    ['[', ']'],
    ['{', '}'],
  ]
})

// Define additional language features
monaco.languages.registerCompletionItemProvider('octdat', {
  provideCompletionItems: (model, position) => {
    // Autocompletion logic here
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
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';

self.MonacoEnvironment = {
  getWorker(_, label) {
    if (label === 'octdat' || label === 'javascript') {
      return new tsWorker()
    }
    return new editorWorker()
  }
};

// Create the editor instance
// const editor = monaco.editor.create(document.getElementById('editorContainer'), {
//   value: '...test',
//   language: 'octdat',
//   theme: 'octdatTheme',
// });