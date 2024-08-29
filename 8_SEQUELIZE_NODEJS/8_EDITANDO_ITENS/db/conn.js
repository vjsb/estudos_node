const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodesequelize2', 'root', '', {
    host: "localhost",
    dialect: "mysql",  //dialect serve para definir qual banco vou estar usando
})


//dezfes o método por conta de aqui estar só conectando não mantendo a conexão
//e como queremos algo continuo que mantenha a conexão utilizamos o método sync usado no index.js
// try {
//     // serve para instanciar uma checagem de conexão
//     sequelize.authenticate() 
//     console.log("Conectamos com sucesso com o Sequelize!")
// } catch (error) {
//     console.log("Não foi possivel conectar: ", error)
// }

module.exports = sequelize;