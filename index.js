const express=require("express");

var app=express();
var AddCategory = require('./api/addCategory');
var adduser=require("./api/user");
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
app.use(express.json());
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
 
var app = express()
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept,Authorization"
    );
    res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE,OPTIONS');
    next();
  });


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true}))
 
// parse application/json
app.use(bodyParser.json())
 

app.use("/api",AddCategory);
app.use("/api/user",adduser);


  
// Twilio Credentials
// To set up environmental variables, see http://twil.io/secure
app.get("/",function(req,res,nest){

res.send("running success");


});

app.listen(3000||process.env.PORT);
