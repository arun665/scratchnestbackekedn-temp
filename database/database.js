const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://mongodb:Arun1117@cluster0.spwl1.mongodb.net/scratchnestRegister?retryWrites=true&w=majority",{useNewUrlParser:true , useUnifiedTopology:true,useFindAndModify:false})
.then(function(){
    console.log(" this is running successfully");
})
.catch(function(error){
    console.log(error);

});

const playlist=new mongoose.Schema({
   
    username:{
        type: String,
       
        
    },
    name:{
        type: String,
    
    },
    contact_no:{
        type: String,
    
    },
    email:{
        type: String,

    },
    profile:{
        type: String
    },
    password:{
        type: String,
        
    },
    address:{
        street_add:{
            type:String,
            
        },
        city:{
            type:String,
            
        },
        pin:{
            type:String,
      
    }
    }

});

const Temp=new mongoose.model("Temp",playlist);
module.exports=Temp;
