var express=require("express");

var router=express.Router();
var User=require("../database/user.js");
var GetUser=User.find({});


router.post("/add",function(req,res,next){

    var username=req.body.username;
    var email=req.body.email;
    var password=req.body.password;
var confirmPassword=req.body.confirmpassword;

if(password!==confirmPassword){

    res.json({
        message:"password not matched"
    })
}
else{
    var addData=new User({
   username:username,
   email:email,
   password:password
  });
    
    addData.save()
    .then(doc=>{





        res.status(201).json({
            message:"added user success",
            data:doc
        })
    })
    .catch(err=>{
       throw err;
    })
    
}
    
    
    });

    
    module.exports=router;