const { DataType, DataTypes } = require('sequelize')

const db = require('../db/conn')

//por conta de User ser nossa entidade principal, os endereços seram referenciados(relacionados) a ele
//por isso que o importamos aqui
const User = require('./User')

const Address = db.define('Address', {
    street: {
        type: DataTypes.STRING,
        required: true
    },
    number: {
        type: DataTypes.STRING,
        required: true
    },
    city: {
        type: DataTypes.STRING,
        required: true
    }
})

//belongTo mostra que um endereço pertence a um usuario
//belongTo tambem quer dizer que dentro da tabela Address eu quero uma coluna UserID que faça uma mensão ao ID do usuario
Address.belongsTo(User);

module.exports = Address;