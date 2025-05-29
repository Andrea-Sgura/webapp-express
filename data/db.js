// Importazione mysql2
const mysql = require(`mysql2`);

// Creazione connessione al Database
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

// Effettuo la connessione
connection.connect((err) => {
    if (err) {
        console.log("Error to connect to Mysql:" + err)
    }
    else {
        console.log("Connected to Mysql")
    }
})

// Esportazione variabile connection
module.exports = connection;