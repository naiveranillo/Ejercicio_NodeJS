const mysql = require('mysql') //requerir modulo mysql

const config = { //configuracion
    host: 'localhost',
    user: 'anillonaiver',
    password: 'naiver3753313',
    database: 'persona'
}

//crear pool
const pool = mysql.createPool(config)

module.exports = pool //exportar pool