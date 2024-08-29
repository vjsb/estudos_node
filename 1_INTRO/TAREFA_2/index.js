const inquirer = require('inquirer');
const chalk = require('chalk');

inquirer
    .prompt(
        [{
            name: 'nome',
            message: 'Qual o seu nome?'
        }, 
        {
            name: 'idade',
            message: 'Qual a sua idade?'
        }
    ]).then((answers) => {

        if(!answers.nome || !answers.idade){
            throw new Error("O nome e idade são obrigatórios!")
        }
        
        const response = `Ola ${answers.nome}, seja Bem Vindo! Meu chapa de ${answers.idade} anos!`
        console.log(chalk.bgYellow.black(response))

    }).catch((err) => console.log(err))