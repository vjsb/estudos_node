const express = require('express')
const app = express() 
const port = 5000 

//pegar index.js da pasta categoria para pegar os routers
const categoriasRouters = require('./categorias')

//usar css
app.use(express.static('public')) 

//usar os routers
app.use('/categorias', categoriasRouters)

//aplicação chamar a porta
app.listen(port, ()=>{
    console.log(`App rodando na porta ${port}`)
})