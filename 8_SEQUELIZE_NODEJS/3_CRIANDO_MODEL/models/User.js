const { DataTypes } = require('sequelize') //import que consegue usar operações do banco SQL

const db = require('../db/conn')

const User = db.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false, //constraint dizendo não pode ser nulo
    },
    occupation: {
        type: DataTypes.STRING,
        required: true, //constraint dizendo campo preenchemento obrigatório
    },
    newsletter: {
        type: DataTypes.BOOLEAN, //constraint dizendo 0 para não e 1 para sim
    },
})

module.exports = User;