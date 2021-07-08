const { Router } = require('express');
const getAllVideogames = require('../controllers/getAllVideogames');


const router = Router();

router.get('/', getAllVideogames);


module.exports = router;