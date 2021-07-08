const { Router } = require('express');
const getAllPlatforms = require('../controllers/platforms');

const router = Router();

router.get('/', getAllPlatforms);

module.exports = router;