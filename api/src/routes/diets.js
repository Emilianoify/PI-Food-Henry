const { Router } = require('express');
const { Diet } = require('../db')
const router = Router();

router.get('/', async (req, res)=>{
   try {
      let diets = await Diet.findAll();
       res.send(diets);
   } catch (error) {
      res.status(404).send(error)
   }
  
});

module.exports = router;