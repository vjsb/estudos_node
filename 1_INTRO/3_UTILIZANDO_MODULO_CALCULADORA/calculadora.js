//exemplo de exportação quando tem só uma função no arquivo
// function soma (a, b){
//     return a + b;
// }
// module.exports = soma;



//exemplo varias funções em um arquivo
function soma(a, b){
    return a + b;
}

function sub(a, b){
    return a - b;
}

function mult(a, b){
    return a * b;
}

function div(a, b){
    return a / b;
}

module.exports = {
    soma,
    sub,
    mult,
    div
}