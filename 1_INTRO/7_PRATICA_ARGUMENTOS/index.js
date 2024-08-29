//modulo externo
const minimist = require('minimist');

//modulo interno
const soma = require('./soma').soma

const args = minimist(process.argv.slice(2));

//convertendo String para Inteiro
const a  = parseInt(args["a"]);
const b  = parseInt(args["b"]);

const resultado = soma(a, b)