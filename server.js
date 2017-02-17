var path = require('path');
var express = require('express');

var app = express();

app.use(express.static('build'))

app.listen(3001, function(err) {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:3001/');
});
