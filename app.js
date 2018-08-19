var express = require('express');
var fixer = require('fixer-api');
var path = require('path');


var app = express();
app.use(express.static(path.join(__dirname, "views")));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, "views", "Home.html"));
});

var port = process.env.PORT || 3000;
app.listen(port);
console.log("App Running on Port: 3000");
