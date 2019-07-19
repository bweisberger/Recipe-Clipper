const express = require('express');
const router = express.Router();
const Recipes = require('../models/recipes');

router.get('/', (req, res)=>{
  res.send("HIIIII")
})
module.exports = router;
