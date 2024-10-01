const Holder = require("../models/Holders");
const helperHolder={
validarEmail:async (email, req)=>{
const {email}=req.body
const existe= await Holder.find({email})
if (existe){
throw new Error ("El email ya existe")
}
},
validarId:async (id)=>{

const existe = await Holder.findById(id)
if(!existe){
throw new Error ("Id no existe")
}
}
}
module.exports= {helperHolder}