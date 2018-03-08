const mongoose =require("mongoose"); //call mongoose
const bodyParser=require("body-parser"); //call body-parser
const express =require("express"); // call express
const routes  = require('./routes/api');
const path = require('path');
const http = require('http');

const router = express.Router();
const app =express(); //make app with express

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/empdb'); //create db
mongoose.Promise=global.Promise;
app.use('/api',routes);

//error handling
app.use(function(err,req,res,next){
  //console.log(err);
  res.status(422).send({error:err.message});

});


app.use( function(req, res, next) {
      response.header("Access-Control-Allow-Origin", "*");
      response.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
      response.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
      if (request.method == 'OPTIONS') {
            response.status(200).end();
      } else {
            next();
      }
});

app.listen(process.env.port || 4000,function(){
console.log('now listening for requests');

}); //make port
