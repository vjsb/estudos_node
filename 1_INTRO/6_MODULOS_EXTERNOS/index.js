//iniciar com npm init para usar o npm
//minimist serve para acessar os argumentos de um jeito mais facil, sendo possivel fazer a busca por arrays que existem nela, exemplo de valores nome e profissao
//node index.js --nome=joao --profissao=engenheiro
const minimist = require('minimist');

const args = minimist(process.argv.slice(2));

console.log(args);

const nome = args['nome'];
const profissao = args['profissao'];

console.log(nome, profissao);

console.log(`O nome dele é ${nome} e a sua profissão é ${profissao}`);