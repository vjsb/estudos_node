const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

//setup para instalar e usar o handlebars no projeto
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {

    const items = ['Item a', 'Item b', 'Item c']

    res.render('dashboard', {items})
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