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
    const { id } = req.params

    const movieSql = "SELECT * FROM movies WHERE id=?"

    const reviewsSql = `
    SELECT *
    FROM reviews
    WHERE movie_id = ?
    `

    connection.query(movieSql, [id], (err, moviesResult) => {
        if (err) return res.status(500).json({ error: "Database query failed: " + err });

        const movie = moviesResult[0];

        // Esecuzione della query che recupera le reviews
        connection.query(reviewsSql, [id], (err, reviewsResult) => {
            if (err) return res.status(500).json({ error: "Database query failed: " + err });

            movie.reviews = reviewsResult;

            res.json(movie)
        })
    })
}

module.exports = {
    index,
    show
}