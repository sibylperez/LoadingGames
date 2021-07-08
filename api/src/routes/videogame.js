const { Router } = require('express');
const getVideogameById = require ('../controllers/getVideogameById');
const postVideogame = require('../controllers/postVideogame');
const getVideogamesByName = require ('../controllers/getVideogamesByName');

const router = Router();

router.get('/:id', getVideogameById);
router.get('/', getVideogamesByName);
router.post('/', postVideogame);


module.exports = router;