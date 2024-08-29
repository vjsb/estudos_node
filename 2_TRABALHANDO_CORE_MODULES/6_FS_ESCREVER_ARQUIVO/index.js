const fs = require ('fs')
const http = require ('http')

const port = 3000

//criar servidor
const server = http.createServer((req, res) => {

    const urlInfo = require('url').parse(req.url, true)
    const name = urlInfo.query.name

    if(!name){
        fs.readFile('index.html', function (err, data){
            res.writeHead(200, { 'Content-type': 'text/html' })
            res.write(data)
            return res.end()
        })
    }else{
        //status de redirecionamento é o 302
        //esta me mandando de volta para a pagina home e salvando cada nome que envio no arquivo.txt
        fs.writeFile('arquivo.txt', name, function(err, data){
            res.writeHead(302, { 
                Location: '/',
            })
            return res.end()
        })
    }
})

server.listen(port, ()=>{
    console.log(`Sistema sendo executado na porta: ${port}`)
})