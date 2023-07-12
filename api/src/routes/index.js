const { Router } = require('express');
const dogsRouter = require('./dogsRoutes');
const temperamentsRouter = require('./temperamentsRoutes');
const axios = require('axios');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
router.use("/dogs", dogsRouter)
router.use("/temperaments", temperamentsRouter)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);



module.exports = router;
