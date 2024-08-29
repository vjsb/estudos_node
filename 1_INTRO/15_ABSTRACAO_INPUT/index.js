const inquirer = require('inquirer');

// inquirer.prompt é o método responsavel por fazer as perguntas
// as perguntas são colocadas dentro de um array portanto podem ser mais de uma, e cada pergunta é um objeto, por isso as {}
inquirer
    .prompt([{
        name: 'p1',
        message: 'Qual a primeira nota?',
    }, 
    {
        name: 'p2',
        message: 'Qual a segunda nota?'
    },
// se deu tudo certo ao fazer as perguntas ele vai cair no then, que teria como definição um 'então'
// nesse caso o then esta pegando as respostas das perguntas, que são as answers
]).then((answers) => {
    console.log(answers)
    const media = ((parseInt(answers.p1) + parseInt(answers.p2)) /2)
    
    if(media > 6){
        console.log(`A media é ${media}, voce foi Aprovado!`)
    }else{
        console.log(`A media é ${media}, voce foi Reprovado!`)
    } 

}).catch((err) => console.log(err)) //catch usado sempre para pegar algum erro que deu dentro do método ou dentro do then