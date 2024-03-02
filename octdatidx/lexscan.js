const fs = require('fs').promises
const path = require('path')
const lexer = require('./lexer.js')
const octdatsDirectory = './TestInput'
const outputDirectory = './Data'

const scanDirectory = async (directoryPath) => {
  try {
    const items = await fs.readdir(directoryPath, { withFileTypes: true })

    if (!items || items.length === 0) {
      console.log(`Directory ${directoryPath} is empty`)
    }

    if (!items.find((item) => item.name === '.octdat')) {
      for (const item of items) {
        const fullPath = path.join(directoryPath, item.name)

        if (item.isFile()) {
          const data = await fs.readFile(fullPath, 'utf8')
          const tokens = lexer(data)
          const outputFilePath = path.join(outputDirectory, `${item.name}_tokens.json`)

          await fs.mkdir(outputDirectory, { recursive: true })
          await fs.writeFile(outputFilePath, JSON.stringify(tokens, null, 2))
        } else if (item.isDirectory()) {
          await scanDirectory(fullPath)
        }
      }
    }
  } catch (err) {
    console.error(`Error scanning directory: ${directoryPath}`, err)
  }
}

console.log('Scanning octdats...')

const startTime = new Date()
scanDirectory(octdatsDirectory)
  .then(() => {
    const endTime = new Date()
    const timeDiff = endTime - startTime
    console.log('Input directory:', octdatsDirectory)
    console.log('Output directory:', outputDirectory)
    console.log(`Time to process: ${timeDiff}ms`)
    console.log('All octdats have been processed!')
  })
  .catch((err) => {
    console.error('An unexpected error occurred:', err)
  })
