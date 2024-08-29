// acesso via browser
const express = require('express')
const app = express()

app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

app.get('/', (req, res) => {
    // em vez de res.render como antes, agora quero enviar minha resposta em JSON, por isso usar o res.json
    res.status(200).json({ message: 'Primeira rota criada com sucesso!' })
})

app.post('/cadastrar', (req, res) => {

    const name = req.body.name
    const price = req.body.price

    if(!name){
        res.status(422).json({message: "O campo name é obrigatório para se cadastrar um produto"})
        return
    }

    console.log(name)
    console.log(price)

    res.status(201).json({message: `O produto ${name} foi criado com o valor de ${price}`})

})

app.listen(3000)