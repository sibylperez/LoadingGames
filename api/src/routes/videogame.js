const { Router } = require ('express');
const { 
    getAllVideogames, 
} = require ('../controllers/videogame');
 
const router = Router();

router.get('/', async (req, res, next) => {
    const videogames= await getAllVideogames()
    res.json(videogames)
} );


module.exports = router;