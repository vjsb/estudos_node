//modulos externos
const inquirer = require('inquirer')
const chalk = require('chalk')

//modulos internos
const fs = require('fs')

console.log('Iniciando Projeto')

operation()

function operation() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'O que voce desja fazer?',
            choices: [
                'Criar Conta',
                'Consultar Saldo',
                'Depositar',
                'Sacar',
                'Sair'
            ]
        }
    ])
        .then((answer) => {
            const action = answer['action'] //para pegar a ação que veio como resposta selecionada

            if (action === 'Criar Conta') {
                createAccount()
            } else if (action === 'Consultar Saldo') {
                getAccountBalance()
            } else if (action === 'Depositar') {
                deposit()
            } else if (action === 'Sacar') {
                withdraw()
            } else if (action === 'Sair') {
                console.log(chalk.bgBlue.black('Obrigado por usar o Accounts!'))
                process.exit()
            }

        })
        .catch((err) => console.log(err))
}



//criar uma conta
function createAccount() {
    console.log(chalk.bgGreen.black('Parabéns por escolher o nosso banco!'))
    console.log(chalk.green('Defina as opções da sua conta a seguir'))

    buildAccount()
}


//construindo a conta
function buildAccount() {
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Digite um nome para a sua conta: '
        }
    ])
        .then((answer) => {
            const accountName = answer['accountName'] //ira pegar o nome passado pelo inquirer
            console.info(accountName) //ira devolver o nome da conta


            //se a conta não existir vai criar e adicionar ao arquivo accounts
            if (!fs.existsSync('accounts')) {
                fs.mkdirSync('accounts')
            }

            //ira bater no arquivo accounts e ver se o nome ja existe, se existir retorna a msg e o metodo buildAccount denovo para que seja inserido um novo nome
            if (fs.existsSync(`accounts/${accountName}.json`)) {
                console.log(
                    chalk.bgRed.black('Esta conta já existe, escolha outro nome!')
                )
                buildAccount()
                return //para encerrar as ações ao chamar o buildAccount pela segunda vez, se não colocado ira ter um bug que não vai deixar mais criar contas e vai só retornar o erro
            }

            fs.writeFileSync(
                `accounts/${accountName}.json`, //cria o arquivo e adiciona o nome no account
                '{"balance": 0}', //cria com o saldo no valor 0
                function (err) {
                    console.log(err)
                }
            )

            console.log(chalk.green('Párabens, a sua conta foi criada!'))
            operation()


        })
        .catch((err) => console.log(err))
}

//pegar saldo da conta
function getAccountBalance(){
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Qual conta deseja consultar o saldo?'
        }
    ])
    .then((answer)=>{
        
        const accountName = answer['accountName']

        //verifica se uma conta existe
        if (!checkAccount(accountName)) {
            return getAccountBalance()
        }

        const accountData = getAccount(accountName) //para buscar a conta solicitada pela função getAccountBalance

        console.log(chalk.bgBlue.black(`Olá, o saldo da sua conta é de R$ ${accountData.balance}`)) //pegando o balance de um objeto

        operation()

    })
    .catch((err) => console.log(err))
}

function withdraw(){
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Qual o nome da sua conta?'
        }
    ])
    .then((answer) => {

        const accountName = answer['accountName']

        //verifica se uma conta existe
        if (!checkAccount(accountName)) {
            return withdraw()
        }

        inquirer.prompt([
            {
                name: 'amount',
                message: 'Quanto voce deseja sacar?'
            }
        ])
        .then((answer)=>{
            const amount = answer['amount']
            removeAmount(accountName, amount)

        })
        .catch((err)=> console.log(err))

    })
    .catch((err)=> console.log(err))
}

//depositar na conta
function deposit() {
    inquirer
        .prompt([
            {
                name: 'accountName',
                message: 'Qual o nome da sua conta?',
            },
        ])
        .then((answer) => {
            const accountName = answer['accountName']

            //verifica se uma conta existe
            if (!checkAccount(accountName)) {
                return deposit()
            }

            inquirer
                .prompt([
                    {
                        name: 'amount',
                        message: 'Quanto você deseja depositar?',
                    },
                ])
                .then((answer) => {
                    const amount = answer['amount']

                    //adiciona função do saldo
                    addAmount(accountName, amount)
                    operation()
                })
        })
}

//checar se a conta existe
function checkAccount(accountName) {
    if (!fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(chalk.bgRed.black('Esta conta não existe, escolha outro nome!'))
        return false //se o nome não existir retorna false e continua o sistema
    }
    return true //se o nome existir retorna true e continua o sistema
}

//função de pegar uma conta
function getAccount(accountName) {
    const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, { //le o arquivo json para encontrar a conta
        encoding: 'utf8', //pega nomes com acento
        flag: 'r' //flag que diz que só desejo ler o arquivo (método readFileSync)
    })

    return JSON.parse(accountJSON) //return para transformar a const accountJSON que vem como arquivo em um JSON por meio do PARSE
}

//função de adicionar o saldo
function addAmount(accountName, amount) { //recebo o nome da conta e o valor
    const accountData = getAccount(accountName) //aqui tem a conta em objeto, resultado do parse feito no JSON.parse
    
    //se não tiver nenhum valor da erro
    if(!amount){
        console.log(chalk.bgRed.black('Ocorreu um erro, tente novamente mais tarde!'))
        return deposit()
    }
    
    accountData.balance = parseFloat(amount) + parseFloat(accountData.balance) //adicionando o valor depositado ao saldo que ja existe, transformando em float para ter decimal
    
    //para salvar o valor no arquivo
    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData), //transformando o JSON em uma string para gravar no arquivo
        function(err){
            console.log(err)
        }
    )

    console.log(chalk.green(`Foi depositado o valor de R$ ${amount} na sua conta!`))
}

function removeAmount(accountName, amount){
    const accountData = getAccount(accountName)

    //se não tiver nenhum valor da erro
    if(!amount){
        console.log(chalk.bgRed.black('Ocorreu um erro, tente novamente mais tarde!'))
        return withdraw()
    }

    if(accountData.balance < amount){
        console.log(chalk.bgRed.black('Valor indisponivel!'))
        return withdraw()
    }

    accountData.balance = parseFloat(accountData.balance) - parseFloat(amount)

    //para salvar o valor no arquivo
    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData), //transformando o JSON em uma string para gravar no arquivo
        function(err){
            console.log(err)
        }
    )

    console.log(chalk.green(`O valor de R$ ${amount} foi sacado da sua conta!`))
    operation()
}