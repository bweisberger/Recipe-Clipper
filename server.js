const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const recipesController = require('./controllers/recipes')
require('./db/db')
const app = express();

app.use(bodyParser.urlencoded({extended:false}))
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use('/recipes', recipesController);

app.get('/', (req, res)=>{
  res.send("Base Page")
});

app.listen(process.env.PORT, ()=>{
  console.log("Listening on port " + process.env.PORT);
});
