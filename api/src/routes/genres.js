const { Router } = require('express');
const { getAllGenres } = require('../controllers/genres');

const router = Router();

router.get('/', async (req, res) => {
    const result =  getAllGenres();
    try {
        return res.json( result );
    } catch (err) {
        return res.status(404).json({
            error: "no se ha encontrado género de videojuego"
        })
    }
});

module.exports = router;