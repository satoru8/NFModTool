import OctdatLexer from './OctdatLexer.mjs'
import OctdatParser from './OctdatParser.mjs'
import { InputStream, CommonTokenStream } from 'antlr4'
import fs from 'fs'

const input = fs.readFileSync('./../TestData/Abilties.octdat', { encoding: 'utf-8' })
const inputStream = new InputStream(input)
const lexer = new OctdatLexer(inputStream)
const tokens = new CommonTokenStream(lexer)

// It's crucial to reset tokens if you are accessing all tokens for logging or any other purposes.
// But since we're directly parsing here, this step might not be necessary unless for debugging:
// const allTokens = lexer.getAllTokens();
// tokens.reset(); // Reset tokens here if you've called getAllTokens

const parser = new OctdatParser(tokens)
parser.buildParseTrees = true // Set buildParseTrees to true before parsing

const tree = parser.octdatFile()

if (!fs.existsSync('./Data')) {
    fs.mkdirSync('./Data')
}

// It's more useful to inspect these after parsing
// fs.writeFileSync('./Data/tokens.txt', tokens.toString())
// Writing all tokens to file after parsing might not be as useful without resetting tokens
// fs.writeFileSync('./Data/lexer.txt', allTokens.toString()) // Make sure to captured allTokens as mentioned

fs.writeFileSync('./Data/tree.txt', tree.toStringTree(parser.ruleNames))