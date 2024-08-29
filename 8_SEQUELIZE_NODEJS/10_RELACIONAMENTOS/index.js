const express = require ('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn')

//não precisa instanciar a classe da tabela, tendo o import aqui ele ja vai saber mapear essa classe
const User = require('./models/User')
const Address = require('./models/Address')

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

//rota POST
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

//filtrando um usuario pelo campo id, rota READ (GET) por ID
app.get('/users/:id', async (req, res) => {
    const id = req.params.id;

    const user = await User.findOne({ raw:true, where: { id: id } }) //método findOne para buscar por ID

    res.render('userview', { user })
})

//rota POST mas com a função de DELETAR um usuario
app.post('/users/delete/:id', async(req, res) => {
    const id = req.params.id

    await User.destroy({ where: { id: id }}) //método destroy para excluir um registro

    res.redirect('/')
})

//rota GET para buscar o formulario do registro que queremos editar
app.get('/users/edit/:id', async(req, res) => {
    const id = req.params.id

    const user = await User.findOne({ raw: true, where: { id: id }})

    res.render('useredit', { user })
})

//rota de UPDATE para editar o registro no banco após ter sido buscado pela rota acima de GET do formulario
app.post('/users/update', async(req, res) => {
    const id = req.body.id
    const name = req.body.name
    const occupation = req.body.occupation
    let newsletter = req.body.newsletter

    if (newsletter === 'on') {
        newsletter = true
    } else {
        newsletter = false
    }

    //condensando os dados em um objeto, objeto criado com os dados que vem da requisição
    const userData = {
        id,
        name,
        occupation,
        newsletter
    }
    
    //passamos o userData no método update que é o objeto de atualização que queremos enviar para o banco de dados e o where para filtar pelo id passado
    await User.update(userData, { where: { id: id } })

    res.redirect('/')

})

//rota READ (GET) de todos usuarios
app.get('/', async (req, res) => {

    //só quero que siga depois que os usuarios chegarem aqui dentro, por isso o await
    //colocando o raw ele tras com os dados mais faceis de serem trabalhados e vem alguns models não utilizados
    const users = await User.findAll({raw: true}) //método findAll para buscar todos

    console.log(users)

    //users: users é para exibir os usuarios cadastrados e trazidos pelo método await
    res.render('home', {users: users})
})

//condicionando a sincronização para a aplicação funcionar
//basicamente não esta deixando a aplicação funcionar sem as tabelas acessadas serem criadas
conn
.sync({ force: true }) //quando queremos remover algo e para recriar as tabelas tambem, usamos o force
.then(() => {
    app.listen(3000)
}).catch((err) => console.log(err))
