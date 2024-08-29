const fs = require('fs')

const arqNovo = "novoarquivo.txt"
const arqAntigo = "arquivo.txt"

fs.rename(arqAntigo, arqNovo, function(err){
    if(err){
        console.log(err)
        return
    }else{
        console.log(`O arquivo ${arqAntigo} foi renomeado para ${arqNovo} !`)
    }
})