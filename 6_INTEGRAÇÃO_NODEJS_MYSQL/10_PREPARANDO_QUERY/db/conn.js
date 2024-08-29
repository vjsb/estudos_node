const mysql = require ('mysql')

const pool = mysql.createPool({
    connectionLimit: 10, //limite de conexões, após 10 o servidor vai desligando as conexões que não estão sendo usadas ou não estão respondendo
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql',
})

module.exports = pool