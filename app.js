const express = require('express');
const app = express();
const morgan = require('morgan');
// app.use(express.static(__dirname + “/public”));

app.get('/', function (req, res) {
  res.send('hello world')
})

app.listen(3000);