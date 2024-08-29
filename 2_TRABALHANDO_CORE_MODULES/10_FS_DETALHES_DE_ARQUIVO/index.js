const { log } = require('console')
const fs = require('fs')

//com o método stats temos acesso as informações de tamanho do arquivo, data de criação, se é arquivou ou diretório e etc
fs.stat('novoArquivo.txt', (err, stats) => {
    if(err){
        console.log(err)
        return
    }

    console.log(stats.isFile()) //se é arquivo
    console.log(stats.isDirectory()) //se é diretório
    console.log(stats.isSymbolicLink()) //se é um link simbólico
    console.log(stats.ctime) //data da criação
    console.log(stats.size) //tamanho

})