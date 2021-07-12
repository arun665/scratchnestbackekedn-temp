const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://mongodb:Arun1117@cluster0.spwl1.mongodb.net/mongodb?retryWrites=true&w=majority",{useNewUrlParser:true , useUnifiedTopology:true,useFindAndModify:false})
.then(function(){
    console.log(" this is running successfully");
})
.catch(function(error){
    console.log(error);

});

const playlist=new mongoose.Schema({
    email:{
        type:String,
  
    },
    password:{
        type:String,

    },
    task:{
        type:String,
        unique:false,
        sparse:true
       
        
    },
    time:{
        type:String
    },
    status:{
        type:String
    }
});

const Temp=new mongoose.model("Temp",playlist);
module.exports=Temp;
