var express = require('express');
var app = express();
const chalk = require('chalk');

// process.env.PORT lets the port be set by Heroku
var port = 8080;

// set the home page route
app.get('/', function(req, res) {

  console.log(chalk.blue.bgRed.bold('Hello world!'));
  debugger
  res.send('hi there printed')
});

app.listen(port, function() {
console.log('Our app is running on http://localhost:' + port);
});
