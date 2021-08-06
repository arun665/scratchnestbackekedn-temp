var express=require("express");
//dfsdfsdfsdf
var router=express.Router();
var database=require("../database/database");
var GetData=database.find({});

router.get("/",function(req,res,err){
    
    GetData.exec(function(err,data){
        if(err){
            throw err;
        }
        res.send(data);
    })

})


router.post("/add",function(req,res,next){

const{username,name,contact_no,email,profile,password,street_add,city,pin}=req.body;
       


var addData=new database(

    {username,name,contact_no,email,profile,password,address:{street_add:street_add, city:city,pin:pin}}
);

addData.save()
.then(doc=>{

    console.log("success added data");


    
    const nodemailer = require('nodemailer');
  
  
    let mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'arunsharmamoh@gmail.com',
            pass: 'Arun5207@'
        }
    });
      
    let mailDetails = {
        from: 'arunsharmamoh@gmail.com',
        to: email,
        subject: 'Test mail',
        text: 'Node.js testing mail for GeeksforGeeks'
    };
      
    mailTransporter.sendMail(mailDetails, function(err, data) {
        if(err) {
            console.log('Error Occurs');
console.log(err);
            res.status(201).json({
                message:"error showing in sending mail",
                data:doc
            }) 
        } else {
            console.log('Email sent successfully');
            res.status(201).json({
                message:"added data success",
                data:doc
            })
        }
    });


    
    


})
.catch(err=>{
   throw err;
})




});

module.exports =router;

