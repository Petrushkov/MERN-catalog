var http = require('http');
const getData = require('./scrapper');

var server = http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
  getData.then(data => res.end(JSON.stringify(data)));
});

server.listen(8000);