const express = require('express')
const app = express() //inicia o express
const port = 3000 //normalmente setada nas variaveis do ambiente, onde cada ambiente tem sua porta
const path = require('path')

//para pegar a pasta template dentro do projeto com os modelos HTML
const basePath = path.join(__dirname, 'templates')

//para ler o body da requisição precisamos usar middleware para depois fazer a conversão
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json()) //toda a requisição do body que veio pleo POST é transformada em um objeto javascript nesse passo, aqui é a conversão



app.get('/users/add', (req, res) => {
    res.sendFile(`${basePath}/userform.html`) //criando formulario para envio do POST
})

app.post('/users/save', (req, res) => {
    console.log(req.body) //pegando o body enviado pelo post, conversão explicada na parte de cima linha 9 a 16

    const name = req.body.name
    const age = req.body.age

    console.log(`O nome do usuario é ${name} e tem ${age} anos`)

    res.sendFile(`${basePath}/userform.html`)

})



//para desviar de cair sempre na url principal que á a home, cuja a rota só tem /, criamos as outras rotas acima
//rota que busca por meio de parametros passados pela url
app.get('/users/:id', (req, res) =>{

    const id = req.params.id

    //leitura da tabela users, resgatar um usuario do banco
    console.log(`Estamos buscando pelo usuario: ${id}`)

    res.sendFile(`${basePath}/users.html`)
})

//função anonima criada após a nossa rota que é a / para definir oque ira ser enviado pelo res
//sendFile vai pegar a const basePath apontando para o diretório templates, e dentro dela seleciona o arquivo html que desejamos mostrar, pode ser qualquer HTML dentro dessa pasta
app.get('/', (req, res) =>{
    res.sendFile(`${basePath}/index.html`)
})


//listen para o express pegar a porta e nos retornar na web
app.listen(port, ()=>{
    console.log(`App rodando na porta ${port}`)
})

