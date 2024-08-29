const express = require ('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn')

//não precisa instanciar a classe da tabela, tendo o import aqui ele ja vai saber mapear essa classe
const User = require('./models/User')

const app = express()

//método para conseguir pegar o body como json
app.use(
    express.urlencoded({ extend: true })
)
app.use(express.json())


app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

//condicionando a sincronização para a aplicação funcionar
//basicamente não esta deixando a aplicação funcionar sem as tabelas acessadas serem criadas
conn.sync().then(() => {
    app.listen(3000)
}).catch((err) => console.log(err))
