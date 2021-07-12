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

var email="arunsharmamoh@gmail.com";
var password="123";
var time="9:30";
var task=req.body.task;
var status=req.body.status;
console.log(task);
var addData=new database({
    email:email,
    password:password,
    time:time,
    task:task,
    status:status
});

addData.save()
.then(doc=>{

    console.log("success added data");
    
    

    res.status(201).json({
        message:"added data success",
        data:doc
    })
})
.catch(err=>{
   throw err;
})




});

module.exports =router;

