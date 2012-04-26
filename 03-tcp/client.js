var net = require('net');

var client = net.connect(8080);
client.on('data', function(data) {
  console.log(data.toString());
  client.end();
});