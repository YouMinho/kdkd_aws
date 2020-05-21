const mysql = require('mysql');
const pool = mysql.createPool({
    host: '',
    user: '',
    password: '',
    database: '',
    port: 3306,
    connectionLimit: 20,
    waitForConnection: false
});
module.exports = pool;