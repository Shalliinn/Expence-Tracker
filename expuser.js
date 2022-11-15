//const User = require("../models/user");

const Expuser=require(('../models/exp-user'))


exports.newuser=  (req,res,next)=>{
    // const name = req.body.name;
    // const email = req.body.email;
    // const password = req.body.password;
    const {name,email,password}=req.body
if(name.length==0 || email.length==0 || password.length==0){
    return res.status(400).json({err: "somethings missing"})
}

 Expuser.findAll({where:{email:email}})
 .then((user)=>{
    if(user.length>0){
       res.status(200).json({message:"User already exist"})
       }
    else{
        Expuser.create({
            name:name,
            email:email,
            password:password
        })
        .then((data)=>{
            res.status(200).json({message:"User Created"})
        }).catch(err=>console.log(err))
    }
 })   
}

exports.existinguser=(req,res,next)=>{
    const {email,password}=req.body
    if(email.length==0 || password.length==0){
        return res.status(400).json({err: "somethings missing"})
    }
    Expuser.findAll({where:{email:email,password:password}})
    .then((user)=>{
     if(user.length==0){
        res.status(200).json({message:"User dosen't exist create new"})  
     }
     else{
        res.status(200).json({message:"Successfully logged in"})
     }
    })
    .catch(err=>{console.log(err)})


}