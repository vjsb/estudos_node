const fs = require("fs")

console.log("Inicio")

fs.writeFileSync('arquivo.txt', 'oi')

// o fim só sera executado após a criação do arquivo, linha 8 só é executada após a linha 5, isso é o sincrono
console.log('Fim')