const {Schema,model}=require("mongoose")
const jswt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
const {  token } = require("../Config")

const UserSchema=new Schema({
  username: {
    type: String,
    require: true,
    lowercase: true,
  },

  email: {
    type: String,
    require: true,
    lowercase: true,
    unique: true,
  },

 
  password: {
    type: String,
  },
})


UserSchema.methods.codificacion=async(password)=>{
  const salt=await bcrypt.genSalt(10)
  return bcrypt.hash(password,salt)
}
UserSchema.methods.comparePassword= async function(password){
  const compare= await bcrypt.compare(password,this.password)
  return  compare
}



const modelSave=model("usuario",UserSchema)


const modelNuevoUsuario=async(user)=>{
  const {username,email,password}=user;
  const buscar=await modelSave.findOne({email})
  if(buscar) return error={mensage:"el usuario ya existe"}

   const nuevoUsuario=new modelSave({
    username,
    email,
    password
   })
   nuevoUsuario.password= await nuevoUsuario.codificacion(nuevoUsuario.password)
   await nuevoUsuario.save()
   return succcess={mensage:"usuario registrado con exito"} 
  
}

const modelLogin=async(user)=>{
  const {email,password}=user;
  const buscar=await modelSave.findOne({email})
  if(buscar){
    const isMatch=await buscar.comparePassword(password)
    if(isMatch){
       const tokenUser=jswt.sign({id:buscar._id}, token,{
        expiresIn:60 * 60 * 24
       })
       
       return succcess={mensage:"usuario registrado con exito",usuario:{
        buscar,
        token:tokenUser
       }} 
    }
  }
    

}
const modelLogouth=async(req,res)=>{
  
}

const datos_usuario=async(id)=>{
const user=await modelSave.findOne({id ,password:0})

return user
}

module.exports={
    modelNuevoUsuario,
    modelLogin,
    modelLogouth,
    datos_usuario
}