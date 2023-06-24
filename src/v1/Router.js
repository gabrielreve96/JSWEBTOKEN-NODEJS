const express=require("express")
const ruta=express.Router()
const controller=require("../controller/Controller.user.js")
const utils=require("../Utils/TokenVery.js")
const userLogin = require("../controller/sessiones.js")

ruta
.post("/login",controller.Login)
.get("/logouth",controller.Logouth)
.post("/resgistrar",controller.Registrousuario)
.get("/prueba",utils,userLogin)
module.exports=ruta