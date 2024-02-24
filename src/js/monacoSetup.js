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

// Dictionary of keywords and their descriptions
const keywordDescriptions = {
  type: 'Defines a new type or class.',
  id: 'Specifies the unique identifier for an object.',
  inherit: 'Indicates that a class inherits from another class.',
  alias: 'Defines an alias for another class.',
  true: 'Specifies a true value.',
  false: 'Specifies a false value.',
  null: 'Specifies null value.'
}

// Context detection and hover information generation
monaco.languages.registerHoverProvider('octdat', {
  provideHover: (model, position) => {
    console.log('Hover triggered at:', position.toString())

    const wordInfo = model.getWordAtPosition(position)
    console.log('WordInfo:', wordInfo)

    if (!wordInfo) return null

    const hoveredWord = wordInfo.word
    const { context, matchRange } = getContextAndRange(model, position, hoveredWord)
    console.log('Context:', context)

    if (context) {
      return {
        range: matchRange,
        contents: generateHoverContents(context, model)
      }
    }

    return null
  }
})

function getContextAndRange(model, position, hoveredWord) {
  const lineContent = model.getLineContent(position.lineNumber)
  const wordRange = model.getWordUntilPosition(position)
  const matchRange = new monaco.Range(
    position.lineNumber,
    wordRange.startColumn,
    position.lineNumber,
    wordRange.endColumn
  )

  // For complex key-value parsing
  if (lineContent.trim().startsWith('{') || lineContent.trim().startsWith('[')) {
    // Implement logic to parse complex structures and determine context
    return { context: { type: 'complex', name: hoveredWord }, matchRange }
  } else if (lineContent.includes('<') && lineContent.includes('>')) {
    return { context: { type: 'typeReference', name: hoveredWord }, matchRange }
  }

  // For simple key-value parsing
  const keyValuePattern = /^\s*(\w+)\s*=\s*(.*)$/
  const match = lineContent.match(keyValuePattern)
  if (match) {
    const key = match[1]
    const value = match[2]
    if (key === hoveredWord || value.includes(hoveredWord)) {
      return { context: { type: 'keyValue', key, value: hoveredWord }, matchRange }
    }
  }

  return { context: null, matchRange }
}

function generateHoverContents(context) {
  switch (context.type) {
    case 'complex':
      return [
        { value: `**Complex structure**: This starts a complex structure like an object or array.` }
      ]

    case 'typeReference': {
      const typeDescription = `**Type reference**: Reference to another defined type or object.`

      return [{ value: typeDescription }]
    }

    case 'keyValue': {
      const keyValueDescription = keywordDescriptions[context.key] || 'This is a key-value pair.'
      return [{ value: `**${context.key}**: ${keyValueDescription}` }]
    }

    default:
      return [{ value: 'Context-specific information or description here.' }]
  }
}

// Load Monaco editor
export function createEditor(container, options = {}, editorId) {
  const editorOptions = {
    ...options,
    value: '',
    language: options.language || 'octdat',
    theme: options.theme || 'octdatTheme',
    automaticLayout: true,
    defaultEOL: monaco.editor.DefaultEndOfLine.CRLF
  }

  const editor = monaco.editor.create(container, editorOptions)
  editorManager.addEditor(editorId, editor)
  return editor
}
