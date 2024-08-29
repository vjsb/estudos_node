const fs = require ('fs')

//esssa função só recebe erro porque como vai deletar um arquivo não vai ter retorno
//para não dar um erro silencioso (erro no terminal por conta de não existir arquivo) deve ser criado um arquivo na pasta com o nome do que quer remover
fs.unlink('arquivo.txt', function(err){
    if(err){
        console.log(err)
        return
    }else{
        console.log('Arquivo removido com sucesso!')
    }
})