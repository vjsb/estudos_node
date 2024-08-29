//imprimindo mais de um valor no mesmo console
const x = 10;

const y = [1, 2, 3];

const z = "Beleleu"

console.log(x, y, z)



//contagem de impressões
console.count(`O valor de x é: ${x}, contagem:`)
console.count(`O valor de x é: ${x}, contagem:`)



//variavel entre String
//passar uma variavel no final do console mas que vai ser substituida pela String %s
//pode ser qualquer valor
console.log('O nome dele é %s, e ele é programador', z)



//função para limpar o console, exemplo depois de 2segundos
setTimeout(() => {
    console.clear()
}, 2000)