const fs = require('fs')
const http = require('http')
const url = require('url')

const port = 3000

//criar servidor
const server = http.createServer((req, res) => {

    const query = url.parse(req.url, true)
    const fileName = query.pathname.substring(1) //pegando o index 1 da lista de substring, /home, /contato e etc

    if (fileName.includes('html')) { //se o nome do arquivo tiver .html ele ira ler e trazer a rota
        if (fs.existsSync(fileName)) { //se existir o arquivo
            fs.readFile(fileName, function (err, data) { //le ele e traz de volta com status 200 e o conteudo
                res.writeHead(200, { 'Content-type': 'text/html' })
                res.write(data)
                return res.end()
            })
        } else {
            //gera um 404 se o arquivo não tiver html no nome ou não existir
            fs.readFile('404.html', function (err, data) {
                res.writeHead(404, { 'Content-type': 'text/html' })
                res.write(data)
                return res.end()
            })
        }
    }
})

server.listen(port, () => {
    console.log(`Sistema sendo executado na porta: ${port}`)
})