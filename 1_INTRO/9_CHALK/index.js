const chalk = require('chalk');

const nota = 9;

if(nota >= 7){
    console.log(chalk.green("Parabéns voce foi Aprovado!"))
}else{
    console.log(chalk.red("Voce foi Reprovado!"));
}