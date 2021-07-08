const { Router } = require('express');
const getAllPlatforms = require('../controllers/platforms');

const router = Router();

router.get('/', async (req, res) => {
  const result = await getAllPlatforms();
    try {
        return res.send(result)
    } catch (err) {
        return res.status(404).json({
            error: "no se ha encontrado el plataforma"
        })
    }  
});

module.exports = router;