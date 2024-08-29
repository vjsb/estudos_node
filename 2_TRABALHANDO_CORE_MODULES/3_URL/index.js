const url = require('url')
const address = 'https://meusiteoficial.com.br/fanpage?produtosfavoritos=cadeira'

//aplicamos o método url.URL que importamos aqui nessa url que criamos
const parsedUrl = new url.URL(address)

console.log(parsedUrl.host)
console.log(parsedUrl.pathname)
console.log(parsedUrl.search)
console.log(parsedUrl.searchParams)
console.log(parsedUrl.searchParams.get('produtosfavoritos'))