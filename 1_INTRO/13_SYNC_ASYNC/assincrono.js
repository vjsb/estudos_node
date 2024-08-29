const fs = require('fs')

console.log("Inicio")

//O arquivo sera criado após a impressão do Inicio e Fim
//isso por conta de ter uma mudança na ordem de execução onde o node não espera que a função seja finalizada
// ele vai executando o resto do código sincrono enquanto o assincrono vai executando em paralelo
//um exemplo é poder gravar esse log de forma assincrona sem precisar esperar para dar uma resposta ao usuario, ja que nesse caso ele não precisa do resultado desse log
fs.writeFile('arquivo.txt', 'oi', function(err){
    setTimeout(function(){
        console.log('Arquivo criado!')
    }, 1000)
})

console.log('Fim!')