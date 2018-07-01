let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let router = require("./router/router");

var url = "mongodb://localhost/nodeapp";///nodeapp";//"mongodb://172.21.0.0/16/nodeApp";
let dataBase;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.use(router);

mongoose.connect(url, function(err){
  if(err) throw err;
  console.log('db connected...');
  app.listen(8080, function(){
    console.log('server started...')
  })
});
