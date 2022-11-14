//const User = require("../models/user");

const Expuser=require(('../models/exp-user'))


exports.postuser=(req,res,next)=>{
    const name = req.body.name;
//console.log(name,'1');
console.log(req.body);

    const email = req.body.email;
    //console.log(email,'2');
    const password = req.body.password;
 Expuser.findAll({where:{email:email}})
 .then((user)=>{
    if(user){
       console.log('user is already existed');
    }
    else{
        Expuser.create({
            name:name,
            email:email,
            password:password
        })
        //console.log(data)
        .then((data)=>{
            res.status(201).json({newUserDetail:data})
        }).catch(err=>console.log(err))
    }
    window.location.href="Login.html"
 })
    
 
   
}