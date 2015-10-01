var express = require('express');
var app = express();
var root = __dirname;
var path = require('path');

app.use(express.static(root + '/app/public'));
app.use(express.static(root + '/app/src'));
app.use('/app', express.static(path.join(root, 'app')));

app.get('/', function(req, res) {
  console.log(require('path'));
  res.sendFile(path.join(root + '/index.html'));
});

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
