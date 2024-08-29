//função interna do node para ler e devolver dados do usuario, entrada e saida
const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readLine.question("Qual o seu animal favorito? ", (animal) => {
    if(animal === "Cachorro"){
        console.log("Realmente é o melhor animal!")
    }else{
        console.log(`Meu animal favorito é: ${animal}`);
    }
})

//npm install inquirer@8.1.2