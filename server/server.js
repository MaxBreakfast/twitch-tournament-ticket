var app = require('./express.js');
var http = require('http');
var server = http.Server(app);

var port = process.env.PORT || 3000;

server.listen(port);

module.exports = server;
