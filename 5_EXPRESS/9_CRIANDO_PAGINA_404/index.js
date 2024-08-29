const express = require('express')
const app = express() 
const port = 3000 

const path = require('path')

//para pegar a pasta users dentro do projeto com os modelos HTML
const basePath = path.join(__dirname, 'templates')

//variavel para puxar o router
const usersRouters = require('./users')

//para ler o body da requisição precisamos usar middleware para depois fazer a conversão
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json()) //toda a requisição do body que veio pleo POST é transformada em um objeto javascript nesse passo, aqui é a conversão

//arquivos estaticos para implementar CSS
app.use(express.static('public')) //dentro do static colocamos a pasta responsavel por guardar nossos arquivos CSS

//como temos o '/users' aqui não podemos ter eles denovo no arquivo de routers, porque ja foi criada a iniciação da rota aqui
//se tiver aqui e la ira dar um bug fazendo bater /users/users/ duas vezes
app.use('/users', usersRouters)

app.get('/', (req, res) =>{
    res.sendFile(`${basePath}/index.html`)
})

//middleware para retornar um 404, se não for encontrada nenhuma rota, ira cair nessa, e sempre precisa ser a ultima (antes do listen, se não da bug)
app.use(function(req, res, next){
    res.status(404).sendFile(`${basePath}/404.html`)
})

//listen para o express pegar a porta e nos retornar na web
app.listen(port, ()=>{
    console.log(`App rodando na porta ${port}`)
})

