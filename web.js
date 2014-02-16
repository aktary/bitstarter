var express = require('express');
var app = express();
var fs = require('fs');
app.use(express.logger());

app.get('/', function(request, response) {
  var foobuff = fs.readFileSync("index.html");
  var foo = foobuff.toString();
  response.send(foo);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
