const servicioSesiones=require("../Services/Servicios.user.js")

const userLogin=async(req,res)=>{
const user=await servicioSesiones.ServecioUser(req.userid)
res.status(200).json({
    usuaerio:{
       user 
    }
})
}

module.exports=userLogin;