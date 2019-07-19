const mongoose = require("mongoose");
const connectionString = 'mongodb://localhost/coffee';

mongoose.connect(connectionString, {useNewUrlParser: true, useCreateIndex: true}, ()=>{
  console.log("connected to MONGOOOOOOSE")
});
