const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const VideogameRoutes = require('./videogame');
const GenresRoutes = require('./genres');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/videogame', VideogameRoutes);
router.use('/genres', GenresRoutes); 


module.exports = router;
