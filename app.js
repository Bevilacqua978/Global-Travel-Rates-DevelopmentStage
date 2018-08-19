var express = require('express');
var path = require('path');
var fix = require('./fixer.js');
var app = express();

//fix.convert("USD", "EUR", 100).then(function (result) { console.log(result.result) });

app.use(express.static(path.join(__dirname, "views")));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, "views", "Home.html"));
});

var port = process.env.PORT || 3000;
app.listen(port);
console.log("App Running on Port: 3000");
