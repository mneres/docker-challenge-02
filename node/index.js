const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql2')
const connection = mysql.createConnection(config)
const sql = `INSERT INTO people(name) values ('Marcelo')`
connection.query(sql)

app.get('/', (req, res) => {
    connection.query(
    'SELECT * FROM people',
        function(err, results, fields) {
            res.send(
                `<h1>Full Cycle Rocks!</h1>` +
                results.map(person =>
                    `<h3> - ${person.name}</h1>
                    `
                ).join(''));
        }
    );
})

const server = app.listen(port, () => {
    console.log('Running on port: ' + port)
})