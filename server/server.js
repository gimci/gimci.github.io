var express = require('express')
var app = express()
var path = require('path')


app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

var staticPath = path.join(__dirname, '..', 'build')
console.log(1, staticPath)

app.use('/', express.static(staticPath))