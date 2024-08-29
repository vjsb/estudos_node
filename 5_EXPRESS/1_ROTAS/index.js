const express = require('express')
const app = express() //inicia o express
const port = 3000 //normalmente setada nas variaveis do ambiente, onde cada ambiente tem sua porta

//função anonima criada após a nossa rota que é a / para definir oque ira ser enviado pelo res
app.get('/', (req, res) =>{
    res.send("Ola Mundo!!!")
})

//listen para o express pegar a porta e nos retornar na web
//funçaõ de callback em () para nos retornar o listen
app.listen(port, ()=>{
    console.log(`App rodando na porta ${port}`)
})