const mongoose = require("mongoose");
const connectionString = process.env.MONGODB_URI;

mongoose.connect(connectionString, {useNewUrlParser: true, useCreateIndex: true}, ()=>{
  console.log("connected to MONGOOOOOOSE")
});
