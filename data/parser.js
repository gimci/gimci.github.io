fs = require('fs')
gimci = require('./Gimci').default

fs.readFile('./dictionary.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  // console.log(data);

  var res = data.split("\n");
  var dict = {}
  var matches = ''
  var word = ''
  
  res.map(function(elem) {
    matches = elem.match(/\d+/g);
    if (matches != null) {
      word = elem.substring(0, elem.length - 2)
    } else {
      word = elem
    }

    word = gimci.romanize(word)
    dict[word] = ''
  });

  var toWrite = ''
  for (var key in dict) {
    if (dict.hasOwnProperty(key)) {
      toWrite += (key + "\n")
    }  
  }

  // console.log(toWrite)

  fs.writeFile('./dictionary.parsed.txt', toWrite, 'utf-8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  // console.log(data);
});

});


