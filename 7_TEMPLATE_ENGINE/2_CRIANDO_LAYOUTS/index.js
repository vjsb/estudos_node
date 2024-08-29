const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

//setup para instalar e usar o handlebars no projeto
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    res.render('home') //render ira renderizar a view home
})

app.listen(3000, () => {
    console.log('App funcionando!')
})