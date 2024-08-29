const calculadora = require("./calculadora")

//exemplo de chamada dos métodos do módulo sem encapsulamento
// calculadora.soma(10, 48);
// calculadora.sub(100, 250);
// calculadora.mult(80, 97);
// calculadora.div(40, 2);

//podemos encapsular tambem para ficar mais facil
//exemplo de encapsulamento
soma = calculadora.soma
subtracao = calculadora.sub
multiplicacao = calculadora.mult
divisao = calculadora.div

console.log(soma(10, 48));
console.log(subtracao(100, 250));
console.log(multiplicacao(80, 97));
console.log(divisao(40, 2));