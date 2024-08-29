//Event Loop é o conceito que a exceução do código vai ser sequencial

function a() {
    console.log("Executando a()");
}

function b() {
    console.log("Executando b()");
}

function c() {
    console.log("Executando c()");
    a()
    b()
}

c()
b()
a()