const express = require('express');
const router = express.Router();
const Recipes = require('../models/recipes');
recipesArr = require('../models/populateRecipes')

router.get('/', (req, res)=>{
  Recipes.find((err, recipes)=>{
    if(err) {
      res.send(err);
    } else {
      res.render('recipes/index.ejs', {
        recipes : recipes
      })
    }
  })
})

router.get('/new', (req, res)=>{
  res.render('recipes/new.ejs')
})

router.post('/', (req, res)=>{
  Recipes.create(req.body, (err, recipeFromDB)=>{
    if (err){
      res.send(err);
    } else {
      res.redirect('/recipes/');
      }
    })
  });
module.exports = router;
