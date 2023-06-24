const moduloServicios=require("../Services/Servicios.user.js")

const Registrousuario=async(req,res)=>{
  const {username,email,password}=req.body
 try {
   let usuario={
    username,
    email,
    password
   }
    const registrandoUser=await moduloServicios.ServicioRegistro(usuario)
    if(registrandoUser.error){
      return res.status(404).json({
       error:registrandoUser
      })
    }else{
      return  res.status(200).json({
       success:registrandoUser
      })
    }
   
    
 } catch (error) {
   
 }

}

const Login=async(req,res)=>{
 const {email,password}=req.body

 if(email && password){
  let usuario={
    email,
    password
  }
   const login=await moduloServicios.ServicioLogin(usuario)
   console.log(login)
}
}


const Logouth=async(usuario)=>{
  res.send("hola")
}

module.exports={
    Registrousuario,
    Login,
    Logouth
}

