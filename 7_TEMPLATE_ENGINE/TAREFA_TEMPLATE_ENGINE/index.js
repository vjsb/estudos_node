const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine("handlebars", exphbs())
app.set("view engine", "handlebars")

//pasta para associar o uso do CSS 
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home', { products })
})

//como o array começ do 1 e o indice do 0 diminuimos em 1 para acessar o produto correto
app.get('/product/:id', (req, res) => {
    const product = products[parseInt(req.params.id) - 1]

    res.render('product', { product })
})

const products = [
    {
        id: '1',
        name: 'Books on the table',
        price: 30.00
    },
    {
        id: '2',
        name: 'Peixe do Tata',
        price: 100.00
    },
    {
        id: '3',
        name: 'MelMamão',
        price: 15.00
    }
]

app.listen(3000);