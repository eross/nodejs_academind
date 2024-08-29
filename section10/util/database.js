const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'ericr',
    database: 'nodecomplete',
    password: 'mysecret'
});

module.exports = pool.promise();