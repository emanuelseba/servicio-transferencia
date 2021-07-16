// MySql
const mysql = require('mysql');

const conexion = mysql.createPool({
    host: process.env.BD_HOST,
    user: process.env.BD_USER,
    password: process.env.BD_PASS,
    database: process.env.BD_NAME,
    ssl: false,
    dateStrings: true
});

module.exports = conexion;