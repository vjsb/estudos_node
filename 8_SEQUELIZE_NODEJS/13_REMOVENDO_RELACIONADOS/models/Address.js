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

//precisamos mapear o usuario aqui tambem se não a aplicação quebra e se perde
//sempre vamos precisar mapear as duas ou mais relações
//o mapemaento aqui diz que um usario possui varios endereços
User.hasMany(Address)

//belongTo mostra que um endereço pertence a um usuario
//belongTo tambem quer dizer que dentro da tabela Address eu quero uma coluna UserID que faça uma mensão ao ID do usuario
Address.belongsTo(User);

module.exports = Address;