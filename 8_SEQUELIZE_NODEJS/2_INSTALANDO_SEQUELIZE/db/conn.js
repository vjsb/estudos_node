const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodesequelize2', 'root', '', {
    host: "localhost",
    dialect: "mysql",  //dialect serve para definir qual banco vou estar usando
})

try {
    // serve para instanciar uma checagem de conexão
    sequelize.authenticate() 
    console.log("Conectamos com sucesso com o Sequelize!")
} catch (error) {
    console.log("Não foi possivel conectar: ", error)
}

module.exports = sequelize;