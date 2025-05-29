// Importazione express
const express = require(`express`)

// Definizione variabile router
const router = express.Router();

// Importazione movieController
const movieController = require(`../controllers/movieController`);

// Definizione delle rotte

// INDEX
router.get(`/`, movieController.index);

// SHOW
router.get(`/:id`, movieController.show);

module.exports = router;
