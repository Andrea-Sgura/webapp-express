// Importazione database
const connection = require("../data/db");

// INDEX
const index = (req, res) => {
    console.log(`Lista Film`)
}

// SHOW
const show = (req, res) => {
    console.log(`Dettaglio Film`)
}

module.exports = {
    index,
    show
}