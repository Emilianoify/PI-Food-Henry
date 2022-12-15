const express = require('express')
const router = express.Router()
require('dotenv').config();
const { Recipe, Diet, Op } = require('../db');
const { getRecipeById, getAllInfo } = require('../controllers/recipes.js')

router.get('/', async (req, res, next) => {

    const { name } = req.query;
    const infoByName = await getAllInfo(next);

    try {
        if (name) {

            const nameFilter = infoByName.filter((e) => e.name.toLowerCase().includes(name.toLowerCase()));

            if (nameFilter.length === 0) {
                return res.status(404).send({ message: 'Recipes not found' });
            } 
             return res.send(nameFilter); 

        } else {
            return res.send(infoByName);
        }
    } catch (error) {
        next(error);
    }

});

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const getRecipeId = await getRecipeById(id);
    return res.send(getRecipeId);

});

router.post("/", async(req, res)=>{
    try {
        const { name, summary, healthScore, image, steps, diets } = req.body;
        const newRecipe = await Recipe.Create({
            name,
            summary,
            healthScore,
            image,
            steps,
            diets
        });
        let getAllDiet = await Diet.findAll({
            where: {
              name: diets
            }
          });
          newRecipe.addDiet(getAllDiet)
          return res.status(201).send(newRecipe);
    } catch (error) {
        
    }
});

router.delete('/:id', async (req, res, next)=>{
    const { id } = req.params;
    try {
        const rcpDel = await Recipe.findOne({
            where: {id: id}
        })
        if(rcpDel){
            await rcpDel.destroy();
            res.send('Recipe deleted')
        }
    } catch (error) {
        next(error);
    }
   

});

module.exports = router;

