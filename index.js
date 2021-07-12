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

app.post("/",function(req,res,nest){

var message = req.body.Message;



const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
    to: '+918146411181',
    from: '+18479735088',
    body: message,
  })
  .then(message => res.json({
    msg:"message sended success"
  }))
  .catch(err=>(console.log(err)));



});
//Z1c_5U4ln4HtVEYeRqL3gT2_6VwBKljaRvoDr6-f


app.listen(3000);