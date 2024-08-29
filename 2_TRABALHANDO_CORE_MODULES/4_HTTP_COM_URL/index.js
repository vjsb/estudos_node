const http = require ('http')

const port = 3000

//criar servidor
const server = http.createServer((req, res) => {
    //urlInfo é a variavel que recebe uma query string que é criada aqui no parse(req.url, true)
    const urlInfo = require('url').parse(req.url, true)
    //dentro dessa query string criamos o request name
    const name = urlInfo.query.name
    
    res.statusCode = 200
    res.setHeader('Contenty-Type', 'text/html') //agora o servidor pode receber mensagem com tags HTML, não sendo mais obrigatório apenas texto comum puro
    
    if(!name){
        res.end(
            '<h1>Preencha o seu nome:</h1><form method="GET"><input type="text" name="name" /><input type="submit" value="Enviar" ></form>'
        )
    }else{
        res.end(`<h1>Seja Bem-Vindo ${name}!</h1>`)
    }

})

server.listen(port, ()=>{
    console.log(`Sistema sendo executado na porta: ${port}`)
})