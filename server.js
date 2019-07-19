const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const recipesController = require('./controllers/recipes')
require('./db/db')
const app = express();

app.use('/recipes', recipesController)

app.get('/', (req, res)=>{
  res.send("Yo")
})

app.listen(3000, ()=>{
  console.log("Listening on port 3000");
})
