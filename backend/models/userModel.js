import mongoose from "mongoose";
import bcrypt from "bcryptjs"
const userSchema = new mongoose.Schema({
  name : {
    type:String,
    require :true,
  },
  email:{
    type:String,
    require:true,
    unique:true,
  },
  password:{
    type:String,
    required:true,
  } 

})
  userSchema.pre("save",async function(next){
if(!this.isModified("password")){
    next();
}

      const salt = await bcrypt.genSalt(10)
this.password = await bcrypt.hash(this.password,salt)
})
userSchema.methods.matchPassword = async function(enterdpassword) {
   return await  bcrypt.compare(enterdpassword,this.password)
}




const User = mongoose.model("User",userSchema)
export default User