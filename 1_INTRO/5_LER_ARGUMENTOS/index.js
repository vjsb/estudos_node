
//comando a ser executado para ver exemplo, podendo alterar valores de nome e idade
//node index.js nome=joao idade=18
console.log(process.argv)

//resgatar o segundo argumento, usando o slice
const args = process.argv.slice(2)

console.log(args)

const nome = args[0].split("=")[1]

console.log(nome)

const idade = args[1].split("=")[1]

console.log(idade)

console.log(`O nome do clinte é ${nome} e ele tem ${idade} anos!`);