const { Router } = require('express');
const getAllVideogames = require('../controllers/getAllVideogames');
const postVideogame = require('../controllers/postVideogame');
const getVideogameByName = require ('../controllers/getVideogameByName');
const getVideogameById = require ('../controllers/getVideogameById')

const router = Router();

router.get('/', async (req, res) => {
    const result = await getAllVideogames();
    const { name } = req.query;
    try {
        if (name) {
            let filter = await getVideogameByName('GET_NAME', name);
            try {
                return res.json(filter)
            } catch (err) {
                return res.status(404).json({
                    error: "no se ha encontrado el videojuego"
                })
            }
        }
        return res.send(result)
    } catch (err) {
        return res.status(404).json({
            error: "no se ha encontrado el videojuego"
        })
    }
});

router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    const result = await getVideogameById(id);
    try{
        if (id) {
        let filter = await getVideogameById('GET_ID', id);
        res.json (filter)}
    }catch (err){
        next(err)
    }
});


router.post('/', async (req, res, next) => {
    const {
        name,
        description,
        creationDate,
        rating,
        platforms,
        genres,
        imagen
    } = req.body;
    const result = await postVideogame(name, description, creationDate, rating, platforms, genres, imagen);
    try {
        return res.status(200).send("Nuevo videojuego para nuestra lista! Let's play!!")
    } catch (err) {
        next(err);
    }
})


module.exports = router;