const fs = require ('fs')
const http = require ('http')

const port = 3000

//criar servidor
const server = http.createServer((req, res) => {
    //le o arquivo e cria uma função anonima para retornar os dados e os erros
    fs.readFile('mensagem.html', function(err, data){
        //o writeHead vai lançar um status code de 200 e o setHeader esta sendo um texto a ser passado em html
        res.writeHead(200, { 'Content-Type': 'text/html' })
        //nos mostra os dados do arquivo lido
        res.write(data)
        //finalizando a leitura do arquivo e trazendo ele com o return
        return res.end()
    })
})

server.listen(port, ()=>{
    console.log(`Sistema sendo executado na porta: ${port}`)
})