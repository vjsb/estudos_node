const express = require('express')
const app = express() //inicia o express
const port = 3000 //normalmente setada nas variaveis do ambiente, onde cada ambiente tem sua porta
const path = require('path')

//para pegar a pasta template dentro do projeto com os modelos HTML
const basePath = path.join(__dirname, 'templates')

//função anonima criada após a nossa rota que é a / para definir oque ira ser enviado pelo res
//sendFile vai pegar a const basePath apontando para o diretório templates, e dentro dela seleciona o arquivo html que desejamos mostrar, pode ser qualquer HTML dentro dessa pasta
app.get('/', (req, res) =>{
    res.sendFile(`${basePath}/index.html`)
})

//listen para o express pegar a porta e nos retornar na web
app.listen(port, ()=>{
    console.log(`App rodando na porta ${port}`)
})