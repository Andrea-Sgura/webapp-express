// Importazione express
const express = require(`express`);

// Inizializzazione variabile app con metodo express()
const app = express();

// Definizione numero di porta su cui il server rimane in ascolto
const port = process.env.SERVER_PORT || 3000;

// Utilizzo del middleware per asset statici
app.use(express.static(`public`));

// Utilizzo del middleware per il parsing del body delle richieste
app.use(express.json());

// Definizione Entry Point
app.get("/", (req, res) => {
    res.send(`Movies API server`)
});

// Server in ascolto
app.listen(port, () => {
    console.log(`Server in ascolto alla porta ${port}`)
});