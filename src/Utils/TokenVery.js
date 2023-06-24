const jswt=require("jsonwebtoken")
const { token } = require("../Config")


module.exports= async(req,res,next)=>{
    const tokenAccess=req.headers["x-access-token"]
    if(!tokenAccess){
        return res.status(404).json({
            mensage:"Este usuario no tiene permisos "
        })
    }

 const tokenVery=jswt.verify(tokenAccess,token)
  req.userId=tokenVery.id;
  return next()
}