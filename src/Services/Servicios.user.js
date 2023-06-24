const ModelosMongoose=require("../Model/Usuarios.js")
const ServicioRegistro=async(usuario)=>{
  const nuevoUsuario=ModelosMongoose.modelNuevoUsuario(usuario)
  return nuevoUsuario;
}

const ServicioLogin=async(usuario)=>{
    const response=await ModelosMongoose.modelLogin(usuario)
    return response;
}
const ServicioLogouth=async(usuario)=>{
    const response=ModelosMongoose.modelLogouth(usuario)
    return response;
}

const ServecioUser=async(id)=>{
    const response=ModelosMongoose.datos_usuario(id)
    return response;
}



module.exports={
    ServicioRegistro,
    ServicioLogin,
    ServicioLogouth,
    ServecioUser
}