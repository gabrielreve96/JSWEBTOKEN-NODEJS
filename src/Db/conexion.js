const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
mongoose.connect("😁",{ useNewUrlParser: true, useUnifiedTopology: true })
.then(response=>{
  console.log("base de datos conectada")
})
.catch(error=>{
  console.log("no se pudo conectar a la base de datos", error)
})
