const express = require('express')
const router = express.Router()

const path = require('path')

//pegar oque esta dentro da pasta template
const basePath = path.join(__dirname, '../templates')

// pagina home
router.get('/', (req, res) => {
    res.sendFile(`${basePath}/categorias.html`) 
})

//pagina categoria especifica
router.get('/:id', (req, res) => {
    res.sendFile(`${basePath}/categoria.html`) 
})

module.exports = router