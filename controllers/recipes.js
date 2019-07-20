const express = require('express');
const router = express.Router();
const Recipes = require('../models/recipes');
recipesArr = require('../models/populateRecipes')

//index route
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

//new route on the way to post route
router.get('/new', (req, res)=>{
  res.render('recipes/new.ejs')
})

//show route
router.get('/:id', (req, res)=>{
  Recipes.findById(req.params.id, (err, recipeFromDb)=>{
    if(err){
      res.send(err);
    } else {
      res.render('recipes/show.ejs', {
        recipe: recipeFromDb
      })
    }
  })
})

//post route
router.post('/', (req, res)=>{
  Recipes.create(req.body, (err, recipeFromDB)=>{
    if (err){
      res.send(err);
    } else {
      res.redirect('/recipes/');
      }
    })
  });

//edit route on the way to put route
router.get('/:id/edit', (req, res)=>{
  Recipes.findById(req.params.id, (err, recipe)=>{
    if (err){
      console.log(err)
    } else {
      res.render('recipes/edit.ejs',{
        recipe: recipe
      })
    }
  })
})

//put route
router.put('/:id', (req, res)=>{
  console.log(req.params.id);
  Recipes.findByIdAndUpdate(req.params.id, req.body, (err, recipe)=>{
    if (err){
      res.send(err);
    } else {
      res.redirect('/recipes/' + req.params.id);
    }
  })
})

//delete route
router.delete('/:id', (req, res)=>{
  Recipes.findByIdAndDelete(req.params.id, (err, recipe)=>{
    if(err){
      res.send(err);
    } else {
      res.redirect('/recipes/');
    }
  })
})




module.exports = router;
