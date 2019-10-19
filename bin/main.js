#!/usr/bin/env node


const program = require("commander");
const pkg = require("../package.json");
const searchWord = require("./searchWord");

program.description("A CLI that shows the definition of a word.").option("-W, --word <word>", "Word to be search.").version(pkg.version).parse(process.argv);

searchWord(program.word);