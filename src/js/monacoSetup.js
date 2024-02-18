import * as monaco from 'monaco-editor'
import { editorManager } from './editorManager'
import formatOctDat from './formatting'

monaco.languages.register({ id: 'octdat' })

monaco.languages.setMonarchTokensProvider('octdat', {
  tokenizer: {
    root: [
      [/\/\/.*$/, 'comment.octdat'],
      [/id\s(([a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+))/, 'id.octdat'],
      [/inherit\s(([a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+))/, 'inherit.octdat'],
      [/alias\s(([a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+))/, 'alias.octdat'],
      [/type\s+[a-zA-Z0-9]+/, 'type.octdat'],
      [/\$clear|appendonly|abstract/, 'keyword.octdat'],
      [/\btrue\b|\bTrue\b/, 'true.octdat'],
      [/\bfalse\b|\bFalse\b/, 'false.octdat'],
      [/\bnull\b/, 'null.octdat'],
      [/((?!<)(([a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+))(?=>))/, 'id.octdat'],
      [/[<|>]/, 'markers.octdat'],
      [/[A-Za-z]+\s==\s[A-Za-z0-9]+.*[A-Za-z0-9]+/, 'replace.octdat'],
      [/([a-zA-Z]+\s(?==))/, 'property.octdat'],
      [/\b\d+/, 'number.octdat'],
      [/[A-Za-z0-9]+\|[A-Za-z0-9]+/, 'anim.octdat'],
      [/\?|\-/, 'symbols.octdat']
    ]
  }
})

monaco.editor.defineTheme('octdatTheme', {
  base: 'vs-dark',
  inherit: true,
  rules: [
    { token: 'id', foreground: '#C586C0' },
    { token: 'inherit', foreground: '#4EC9B0' },
    { token: 'alias', foreground: '#CE9178' },
    { token: 'type', foreground: '#9CDCFE' },
    { token: 'keyword', foreground: '#DCDCAA' },
    { token: 'property', foreground: '#569CD6' },
    { token: 'string', foreground: '#CE9178' },
    { token: 'number', foreground: '#D7BA7D' },
    { token: 'markers', foreground: '#ff9d76' },
    { token: 'true', foreground: '#6A9955', fontStyle: 'bold' },
    { token: 'false', foreground: '#F44747', fontStyle: 'bold' },
    { token: 'null', foreground: '#F44747' },
    { token: 'comment', foreground: '#6a9955' },
    { token: 'replace', foreground: '#fadca5' },
    { token: 'anim', foreground: '#00fff7' },
    { token: 'symbols', foreground: '#00ff0d' }
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
      open: '{',
      close: '}'
    },
    {
      open: '[',
      close: ']'
    },
    {
      open: '(',
      close: ')'
    },
    {
      open: '<',
      close: '>'
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

// Register document formatting provider
monaco.languages.registerDocumentFormattingEditProvider('octdat', {
  provideDocumentFormattingEdits: (model) => {
    try {
      const document = { getText: model.getValue.bind(model) }
      const range = model.getFullModelRange()
      const edits = formatOctDat(document, range)

      console.log('Formatting edits:', edits)

      return edits.map((edit) => ({
        range: monaco.Range.fromObject(edit.range),
        text: edit.text
      }))
    } catch (error) {
      console.error(`Error formatting document: ${error.message}`)
      return []
    }
  }
})

// Production loading of monaco-editor

// export function createEditor(container, options = {}) {
//   return monaco.editor.create(container, {
//     ...options,
//     value: options.value || '',
//     language: options.language || 'octdat',
//     theme: options.theme || 'octdatTheme',
//     scrollBeyondLastLine: true,
//     automaticLayout: true,
//   });
// }

export function createEditor(container, options = {}, editorId) {
  const filePath = './octdat.octdat'

  return new Promise((resolve, reject) => {
    fetch(filePath)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch file: ${response.status} ${response.statusText}`)
        }
        return response.text()
      })
      .then((fileContent) => {
        const editor = monaco.editor.create(container, {
          ...options,
          value: fileContent || '',
          language: options.language || 'octdat',
          theme: options.theme || 'octdatTheme',
          automaticLayout: true,
          defaultEOL: monaco.editor.DefaultEndOfLine.LF
        })

        editorManager.addEditor(editorId, editor)

        resolve(editor)
      })
      .catch((error) => {
        console.error('Error creating editor:', error)
        reject(error)
      })
  })
}