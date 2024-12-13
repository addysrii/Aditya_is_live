import User from "../models/userModel.js";

const registerUser = async(req,res) =>{
    const {name,email,password} = req.body

const userExists = await User.findOne({email})
if(userExists){
  return  res.status(400).json({message:"User already exists"})
}

const user = await User.create({name,email,password})
if(user){
    res.status(201).json({
    _id : user._id,
    name:user.name,
    email:user.email
    })
}
else{
    res.status(400).json({message:"Invalid Credentials"})
}
}
const loginUser = async(req,res) =>{
    const {email,password} = req.body
    const userExists = await User.findOne({email})
    try{
    if(!userExists){
        res.status(400).json({message: "Email not found "})
    }
    else{
        if(userExists && await userExists.matchPassword(password)){
            res.status(201).json({
                   name:userExists.name,
                email:userExists.email 
            })
        }
    }
}
    catch(error){
res.status(500).json({message : "Server error"})
    }
    
}
export  {registerUser,loginUser}