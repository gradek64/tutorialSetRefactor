var express = require('express');
var app = express();

// process.env.PORT lets the port be set by Heroku
var port = 8080;
// set the home page route
app.get('/', function (req, res) {
  debugger;
  res.send('hi there printed changed');
});

app.listen(port, function () {
  console.log('Our app is running on http://localhost::' + port);
});
