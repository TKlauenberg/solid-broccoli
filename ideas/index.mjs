import SolidBrocoliParser from "../src/grammar/SolidBrocoliParser.mjs";
import SolidBrocoliLexer from "../src/grammar/SolidBrocoliLexer.mjs"
import * as antlr4 from "antlr4";

// Read the contents of your SolidBrocoli file into a string
import * as fs from "fs";
import * as path from "path";
import * as process from "process";
const input = fs.readFileSync(path.join(process.cwd(),'test', 'First.sb'), 'utf8');

// Create a CharStream from the input string
const chars = new antlr4.InputStream(input);

// Create a lexer that feeds off the input CharStream
const lexer = new SolidBrocoliLexer(chars);

// Create a buffer of tokens pulled from the lexer
const tokens = new antlr4.CommonTokenStream(lexer);

// Create a parser that feeds off the tokens buffer
const parser = new SolidBrocoliParser(tokens);

// Parse the input file and generate a parse tree
const parseTree = parser.program().typeDecl()[0].ID().symbol.text
console.log(parseTree);