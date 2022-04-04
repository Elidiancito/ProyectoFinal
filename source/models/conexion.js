const mysql = require("mysql");
const { promisify } = require('util');

var sqlConnecion = mysql.createConnection({
    host: 'proyecto01.clifq53brhs5.us-east-1.rds.amazonaws.com',
    user: 'root',
    password: 'proyecto1',
    port: '3306',
    database: 'sist'
});

sqlConnecion.connect(function(err) {
    if (err) {
        console.log(err.message);
    } else {
        console.log("Se conecto con exito");
    }

});

sqlConnecion.query = promisify(sqlConnecion.query)

module.exports = sqlConnecion;
