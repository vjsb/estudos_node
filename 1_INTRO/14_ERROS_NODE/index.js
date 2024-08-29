const x = "10"

//checar se x é numero inteiro
//encerra o programa se der erro
// if(!Number.isInteger(x)){
//     throw new Error('O valor de x não é inteiro!')
// }

//cai no erro do catch e não encerra o programa
try{
    x = 2
}catch(err){
    console.log(`Erro: ${err}`)
}


console.log('Continuando o sistema...')