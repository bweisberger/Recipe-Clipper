const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: {type:String, required:true},
  author: String,
  img: String,
  link: {type:String, required:true},
  ingredients: [{type:String}],
  directions: [{type:String}],
  notes: [{type:String}]
})


const Recipes = mongoose.model("Recipes", recipeSchema)

module.exports = Recipes;
