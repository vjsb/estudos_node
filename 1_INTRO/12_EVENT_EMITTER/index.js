//Serve para se poder ativar um código em alguns pontos de uma aplicação

const EventEmitter = require("events")
const eventEmitter = new EventEmitter();

eventEmitter.on('start', ()=> {
    console.log("Durante")
})

console.log("Antes")

//evento iniciado, imprimindo o Durante
eventEmitter.emit("start")

console.log("Depois")