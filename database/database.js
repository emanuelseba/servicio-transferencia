// MySql
const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: process.env.BD_HOST,
    user: process.env.BD_USER,
    password: process.env.BD_PASS,
    database: process.env.BD_NAME
});


module.exports = conexion;