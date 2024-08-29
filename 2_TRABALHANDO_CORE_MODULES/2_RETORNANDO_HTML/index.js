const http = require ('http')

const port = 3000

//criar servidor
const server = http.createServer((req, res) => {
    
    res.statusCode = 200
    res.setHeader('Contenty-Type', 'text/html') //agora o servidor pode receber mensagem com tags HTML, não sendo mais obrigatório apenas texto comum puro
    res.end('<h1>Olá, este é meu primeiro server com HTML!</h1>')
})

server.listen(port, ()=>{
    console.log(`Sistema sendo executado na porta: ${port}`)
})