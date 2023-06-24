const cors=require("cors")
const express=require("express");



const app=express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
require("./Db/conexion.js")
const PORT=process.env.PORT|| 3000
app.use("/api/v01",require("./v1/Router.js"))
app.listen(PORT,()=>{
    console.log("Server en linea")
})