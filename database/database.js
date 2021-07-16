// MySql
const mysql = require('mysql');

// const conexion = mysql.createConnection({
//     host: process.env.BD_HOST,
//     user: process.env.BD_USER,
//     password: process.env.BD_PASS,
//     database: process.env.BD_NAME
// });

const conexion = mysql.createPool({
    host: process.env.BD_HOST,
    user: process.env.BD_USER,
    password: process.env.BD_PASS,
    database: process.env.BD_NAME,
    ssl: false,
    dateStrings: true
});

// const conexion = function (sql, callback) {
//     pool.getConnection(function (err, conn) {
//         if (err) {
//             callback(err, null);
//         } else {
//             conn.query(sql, function (err, results) {
//                 callback(err, results);
//             });
//             conn.release();
//         }
//     });
// };


module.exports = conexion;