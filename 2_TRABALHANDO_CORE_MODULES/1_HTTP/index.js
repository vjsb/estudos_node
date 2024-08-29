const http = require ('http')

const port = 3000

//criar servidor
const server = http.createServer((req, res) => {

    res.write('Ola HTTP!') //criar a msg de response
    res.end() //encerrar a response

})

//servidor ouvir em que porta esta sendo executado
server.listen(port, ()=>{
    console.log(`Sistema sendo executado na porta: ${port}`)
})