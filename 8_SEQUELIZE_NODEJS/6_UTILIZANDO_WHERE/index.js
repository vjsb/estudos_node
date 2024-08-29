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

app.get('/users/create', (req, res) => {
    res.render('adduser')
})

app.post('/users/create', async (req, res) => {
    const name = req.body.name
    const occupation = req.body.occupation
    let newsletter = req.body.newsletter

    //se for true retorna como 1 no banco, e adicionamos o else para que ao invés de voltar como null volte com o valor 0
    if (newsletter === 'on') {
        newsletter = true
    } else {
        newsletter = false
    }

    console.log(req.body)

    await User.create({name, occupation, newsletter})

    res.redirect('/')
})

//filtrando um usuario pelo campo id
app.get('/users/:id', async (req, res) => {
    const id = req.params.id;

    const user = await User.findOne({ raw:true, where: { id: id } })

    res.render('userview', { user })
})

app.get('/', async (req, res) => {

    //só quero que siga depois que os usuarios chegarem aqui dentro, por isso o await
    //colocando o raw ele tras com os dados mais faceis de serem trabalhados e vem alguns models não utilizados
    const users = await User.findAll({raw: true})

    console.log(users)

    //users: users é para exibir os usuarios cadastrados e trazidos pelo método await
    res.render('home', {users: users})
})

//condicionando a sincronização para a aplicação funcionar
//basicamente não esta deixando a aplicação funcionar sem as tabelas acessadas serem criadas
conn.sync().then(() => {
    app.listen(3000)
}).catch((err) => console.log(err))
