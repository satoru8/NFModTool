// const vscode = require('vscode');
import * as monaco from 'monaco-editor'

/**
 * Formats the OctDat content within the specified range.
 *
 * @param {vscode.TextDocument} document - The document containing the OctDat content.
 * @param {vscode.Range} range - The range within the document to format.
 * @param {object} options - Formatting options (if needed).
 * @returns {vscode.TextEdit[]} An array of text edits to apply.
 */

// Function from vscode formatter

// function formatOctDat(document, range) {
//     const text = document.getText(range);
//     const formattedText = indentOctDat(text);
//     return [vscode.TextEdit.replace(range, formattedText)];
// }

function formatOctDat(document, range) {
  const text = document.getText(range)

  if (typeof text !== 'string') {
    console.error('Invalid text format. Expected a string.')
    return []
  }
  
  const normalizedText = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n') // Normalize to LF

  const formattedLines = indentOctDat(normalizedText).split('\n'); // Assuming indentOctDat works on whole document

  const edits = [];
  for (let i = 0; i < formattedLines.length; i++) {
    const startPos = range.getStartPosition().with({ lineNumber: i + 1, column: 1 });
    const endPos = range.getEndPosition().with({ lineNumber: i + 1, column: formattedLines[i].length + 1 });

    edits.push(monaco.editor.singleEditOperation(
      monaco.Range.fromPositions(startPos, endPos),
      formattedLines[i]
    ));
  }

  return edits;

}

/**
 * Adjusts the indentation of OctDat content.
 *
 * @param {string} text - The OctDat content to format.
 * @returns {string} The formatted OctDat content.
 */
function indentOctDat(text) {
  const lines = text.split('\n')
  let currentIndentation = 0
  let insideObject = false

  const arrayFormat = /^[A-Za-z0-9]+\s*=\s*\[/

  const getIndentation = () => '\t'.repeat(currentIndentation)

  const indentedLines = lines.map((line) => {
    const trimmedLine = line.trim()

    if (/^\/\/.*/.test(trimmedLine)) {
      return line
    }

    if (arrayFormat.test(trimmedLine)) {
      const match = trimmedLine.match(/(\s*)([A-Za-z0-9]+)\s*=\s*\[/)
      if (match) {
        const [, indentation, variableName] = match
        const indentedArrayStart = `${getIndentation()}${variableName} =\n${getIndentation()}[`
        currentIndentation++
        return indentedArrayStart
      }
    }

    if (trimmedLine.match(/^\s*\[.*\{/)) {
      const splitBrace = `${getIndentation()}${trimmedLine.replace('{', `\n${getIndentation()}{`)}`
      currentIndentation++
      return splitBrace
    }

    if (trimmedLine.endsWith('{') || trimmedLine.endsWith('[')) {
      insideObject = true
      const indentedLine = getIndentation() + trimmedLine
      currentIndentation++
      return indentedLine
    } else if (trimmedLine.startsWith('}') || trimmedLine.startsWith(']')) {
      insideObject = false
      currentIndentation = Math.max(currentIndentation - 1, 0)
      const indentedLine = getIndentation() + trimmedLine
      return indentedLine
    } else if (insideObject) {
      return indentObjectLine(trimmedLine, currentIndentation)
    }

    return getIndentation() + trimmedLine
  })

  return indentedLines.join('\n')
}

/**
 * Indents a line within an OctDat object.
 *
 * @param {string} line - The trimmed line content.
 * @param {number} indentation - The current indentation level.
 * @returns {string} The indented line.
 */
function indentObjectLine(line, indentation) {
  if (line.includes('{') && line.includes('}')) {
    const splitLine = line.split(/([{}])/)
    const indentedLine = splitLine
      .map((text, index) => {
        if (index % 2 === 0) {
          return '\t'.repeat(indentation) + text.trim()
        } else if (text === '{') {
          return '{\n'
        } else if (text === '}') {
          return '\n' + '\t'.repeat(indentation) + '}'
        } else {
          return text
        }
      })
      .join('')
    return indentedLine
  }

  if (line.includes('{') || line.includes('}')) {
    return '\t'.repeat(indentation) + line.trim()
  }

  return '\t'.repeat(indentation) + formatObjectProperty(line)
}

/**
 * Formats an object property line by splitting it into key and value parts.
 *
 * @param {string} line - The line to be formatted
 * @return {string} The formatted line with key and value separated by '='
 */
function formatObjectProperty(line) {
  const parts = line.split('=')
  if (parts.length === 2) {
    const key = parts[0].trim()
    const value = parts[1].trim()

    return `${key} = ${value}`
  }
  return line
}

// function formatArrayProperty(value) {
//     const arrayItems = value.split('\n').map(item => `\t${item.trim()}`).join('\n');
//     return `[${arrayItems}\n]`;
// }

// module.exports = {
//     formatOctDat,
// };

export default formatOctDat
