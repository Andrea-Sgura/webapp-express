// Importazione database
const connection = require("../data/db");

// INDEX
const index = (req, res) => {
    connection.query("SELECT * FROM movies", (err, moviesResult) => {
        if (err) return res.status(500).json({ error: "Database query failed: " + err });

        res.json(moviesResult);
    })
}

// SHOW
const show = (req, res) => {
    console.log(`Dettaglio Film`)
}

module.exports = {
    index,
    show
}