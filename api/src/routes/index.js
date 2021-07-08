const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const VideogameRoutes = require('./videogame');
const VideogamesRoutes = require('./videogames');
const GenresRoutes = require('./genres');
const PlatformRoutes = require('./platforms')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/videogame', VideogameRoutes);
router.use('/videogames', VideogamesRoutes)
router.use('/genres', GenresRoutes); 
router.use('/platforms', PlatformRoutes);


module.exports = router;
