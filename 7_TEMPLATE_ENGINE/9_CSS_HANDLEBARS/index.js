const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

//configurando o partials para ser usado no projeto
const hbs = exphbs.create({
    partialsDir: ['views/partials'],
})

//setup para instalar e usar o handlebars no projeto junto com o partials agora que esta dentro do hbs
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

//pasta para associar o uso do CSS 
app.use(express.static('public'))

app.get('/dashboard', (req, res) => {

    const items = ['Item a', 'Item b', 'Item c']

    res.render('dashboard', {items})
})

app.get('/post', (req, res) => {
    const post = {
        title: 'Aprender Node.js',
        category: 'Javascript',
        body: 'Este artigo vai te ajudar a aprender Node.js...',
        comments: 4,
    }

    res.render('blogpost', { post })
})

app.get('/blog', (req, res) => {
    const posts = [
        {
            title: 'Aprender Node.js',
            category: 'Javascript',
            body: 'Este artigo vai te ajudar a aprender Node.js...',
            comments: 4,
        },
        {
            title: 'Aprender PHP',
            category: 'PHP',
            body: 'Este artigo vai te ajudar a aprender PHP...',
            comments: 7,
        },
        {
            title: 'Aprender Java',
            category: 'Java',
            body: 'Este artigo vai te ajudar a aprender Java...',
            comments: 8,
        }
    ]

    res.render("blog", { posts })
})

app.get('/', (req, res) => {

    const user = {
        name: 'João',
        surname: 'Cariolano',
        age: '23'
    }

    const palavra = 'TESTE'

    const auth = true

    const approved = true

    //render ira renderizar a view home
    // quando a chave e valor tem nomes iguais pode resumir em uma user só, mas no exemplo esta em modo didatico
    //podemos chamar o primeiro user como qualquer outro nome, pos ele é a chave
    res.render('home', { user: user, palavra, auth, approved }) 
})

app.listen(3000, () => {
    console.log('App funcionando!')
})