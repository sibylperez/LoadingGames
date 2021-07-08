const { Router } = require('express');
const getAllVideogames = require('../controllers/getAllVideogames');
const getVideogameById = require ('../controllers/getVideogameById');
const getVideogameByName = require ('../controllers/getVideogameByName');
const postVideogame = require('../controllers/postVideogame');

const router = Router();

router.get('/', getAllVideogames);
router.get('/:id', getVideogameById);
router.get('/:name', getVideogameByName);


router.post('/', async (req, res, next) => {
    const { name, description, creationDate, rating, platforms, genres, imagen } = req.body;
    await postVideogame(name, description, creationDate, rating, platforms, genres, imagen);
    try {
        return res.status(200).send("Nuevo videojuego para nuestra lista! Let's play!!")
    } catch (err) {
        next(err);
    }
})


module.exports = router;