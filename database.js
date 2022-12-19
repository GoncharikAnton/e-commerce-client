const mysql = require('mysql');

const connection = mysql.createConnection(
    {
        user: 'root',
        host: 'localhost',
        password: 'password',
        database: 'store'
    }
);

connection.connect((err) => {
    if (err) {
        throw err;
    } else {
        console.log('Database is connected successfully!');
    }
})

module.exports = connection;