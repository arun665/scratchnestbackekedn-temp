const mongoose = require("mongoose");
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

mongoose.connect("mongodb+srv://mongodb:Arun1117@cluster0.spwl1.mongodb.net/tempredux?retryWrites=true&w=majority",{useNewUrlParser:true , useUnifiedTopology:true,useFindAndModify:false})
.then(function(){
    console.log(" this is running successfully");
})
.catch(function(error){
    console.log(error);

});

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        index:{
            unique:true,
        }

  
    },
    email:{
        type:String,
required:true,
        index:{
            unique:true,
        }
        
    },
    password:{
 type:String,
 required:true
    }
});

const Users=new mongoose.model("users",userSchema);
module.exports=Users;
