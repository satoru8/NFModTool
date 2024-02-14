import * as monaco from 'monaco-editor'

monaco.languages.register({ id: 'octdat' })

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
      [/\btrue\b|\bTrue\b/, 'octdat.true'],
      [/\bfalse\b|\bFalse\b/, 'octdat.false'],
      [/\bnull\b/, 'octdat.null'],
      [/((?!<)(([a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+))(?=>))/, 'octdat.id'],
      [/[<|>]/, 'octdat.markers'],
      [/[A-Za-z]+\s==\s[A-Za-z0-9]+.*[A-Za-z0-9]+/, 'octdat.replace'],
      [/([a-zA-Z]+\s(?==))/, 'octdat.property'],
      [/\b\d+/, 'octdat.number'],
      [/[A-Za-z0-9]+\|[A-Za-z0-9]+/, 'octdat.anim'],
    ]
  }
})

monaco.editor.defineTheme('octdatTheme', {
  base: 'vs-dark',
  inherit: true,
  rules: [
    { token: 'octdat.id', foreground: '#C586C0' },
    { token: 'octdat.inherit', foreground: '#4EC9B0' },
    { token: 'octdat.alias', foreground: '#CE9178' },
    { token: 'octdat.type', foreground: '#9CDCFE' },
    { token: 'octdat.keyword', foreground: '#DCDCAA' },
    { token: 'octdat.property', foreground: '#569CD6' },
    { token: 'octdat.string', foreground: '#CE9178' },
    { token: 'octdat.number', foreground: '#D7BA7D' },
    { token: 'octdat.markers', foreground: '#ff9d76' },
    { token: 'octdat.true', foreground: '#6A9955', fontStyle: 'bold' },
    { token: 'octdat.false', foreground: '#F44747', fontStyle: 'bold' },
    { token: 'octdat.null', foreground: '#F44747' },
    { token: 'octdat.comment', foreground: '#6a9955' },
    { token: 'octdat.replace', foreground: '#fadca5' },
    { token: 'octdat.anim', foreground: '#bd94ff' },
  ],
  colors: {
    idColor: '#f700ff'
  }
})

monaco.languages.setLanguageConfiguration('octdat', {
  brackets: [
    ['[', ']'],
    ['{', '}'],
    ['(', ')']
  ],
  autoClosingPairs: [
    {
      open: "{",
      close: "}"
    },
    {
      open: "[",
      close: "]"
    },
    {
      open: "(",
      close: ")"
    },
    {
      open: "<",
      close: ">"
    }
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
    offSide: true,
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
})

// Configure Monaco environment for worker
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'

self.MonacoEnvironment = {
  getWorker(_, label) {
    if (label === 'octdat') {
      return new tsWorker()
    }
    return new editorWorker()

  }
}

// export function createEditor(container, options = {}) {
//   return monaco.editor.create(container, {
//     ...options,
//     value: options.value || 'test',
//     language: options.language || 'octdat',
//     theme: options.theme || 'octdatTheme',
//     // scrollBeyondLastLine: false,
//     // minimap: { enabled: false },
//     // glyphMargin: true,
//     automaticLayout: true,
//   });
// }


// Use local file for testing
export function createEditor(container, options = {}) {

  const filePath = '../src/assets/octdat.octdat';

  fetch(filePath)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch file: ${response.statusText}`);
      }
      return response.text();
    })
    .then(fileContent => {

      const editor = monaco.editor.create(container, {
        ...options,
        value: fileContent,
        language: options.language || 'octdat',
        theme: options.theme || 'octdatTheme',
        automaticLayout: true,
      });

      return editor;
    })
    .catch(error => {
      console.error(error);
    });
}


import formatOctDat from './formatting';

monaco.languages.registerDocumentFormattingEditProvider('octdat', {
  provideDocumentFormattingEdits: (model) => {
    try {
      const document = { getText: model.getValue.bind(model) };
      const range = model.getFullModelRange();
      const edits = formatOctDat(document, range);

      console.log('Formatting edits:', edits);

      return edits.map(edit => ({
        range: monaco.Range.fromObject(edit.range),
        text: edit.text
      }));
    } catch (error) {
      console.error(`Error formatting document: ${error.message}`);
      return [];
    }
  },
});
