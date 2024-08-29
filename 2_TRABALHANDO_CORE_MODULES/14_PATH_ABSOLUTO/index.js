const path = require('path')

//path absoluto - rota toda do arquivo alvo
console.log(path.resolve('teste.txt'))

//formar path - criar rotas dinamicas
const midFolder = 'relatorios'
const fileName = 'ingrid'

const finalPath = path.join('/', 'arquivos', midFolder, fileName)
console.log(finalPath)