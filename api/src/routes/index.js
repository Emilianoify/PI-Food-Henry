const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
//const recipeRouter = require('./recipe.js');
const recipesRouter = require('./recipes.js');
const dietRouter = require('./diets.js');

const router = Router();

//router.use('/recipe', recipeRouter);
router.use('/recipes', recipesRouter);
router.use('/diets', dietRouter);
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/', async function(req, res, next){
    res.send('Bienvenido mi proyecto');
  })


module.exports = router;
