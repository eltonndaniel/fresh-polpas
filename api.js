const path = require('path');

var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/home.html'))
});

app.listen(8001, function() {
  console.log('App de Exemplo escutando na porta 8000!');
});
