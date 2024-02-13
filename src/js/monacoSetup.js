import * as monaco from 'monaco-editor';

monaco.languages.register({ id: 'octdat' });

// Define syntax highlighting rules for 'octdat' language
monaco.languages.setMonarchTokensProvider('octdat', {
  tokenizer: {
    root: [
      [/\/\/.*$/, 'comment'],
      [/id\s(([a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+))/, 'octdat.id'],
      [/inherit\s(([a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+))/, 'octdat.inherit'],
      [/alias\s(([a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+))/, 'octdat.alias'],
      [/type\s+[a-zA-Z0-9]+/, 'octdat.type'],
      [/\$clear|appendonly|abstract/, 'octdat.keyword'],
    ],
  },
});

monaco.editor.defineTheme('octdatTheme', {
  base: 'vs-dark',
  inherit: true,
  rules: [
    { token: 'octdat.id', foreground: '#b700ff' },
    { token: 'octdat.inherit', foreground: '#f700ff' },
    { token: 'octdat.alias', foreground: '#d0ff00' },
    { token: 'octdat.type', foreground: '#00c3ff' },
    { token: 'octdat.keyword', foreground: '#15ff00' },

  ],
  colors: {
    // Directly specify the color value for 'idColor'
    'idColor': '#f700ff',
  },
});

monaco.languages.setLanguageConfiguration('octdat', {
  brackets: [
    ['[', ']'],
    ['{', '}'],
    ['(', ')']
  ],
  autoClosingPairs: [
    // ['[', ']'],
    // ['{', '}'],
    // ['(', ')'],
    // ['"', '"'],
    // ["'", "'"],
    // ['<', '>']
  ],
  surroundingPairs: [
    ['[', ']'],
    ['{', '}'],
    ['(', ')'],
    ['"', '"'],
    ["'", "'"],
    ['<', '>']
  ],
  comments: {
    lineComment: '//',
    blockComment: ['/*', '*/']
  },
  folding: {
    markers: {
      start: /\[\$/,
      end: /\$\]/
    }
  },
  onEnterRules: [
    {
      beforeText: /\[/,
      afterText: /\$/,
      action: { indentAction: monaco.languages.IndentAction.Indent }
    },
    {
      beforeText: /\$/,
      afterText: /\[/,
      action: { indentAction: monaco.languages.IndentAction.Indent }
    }
  ]
});

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