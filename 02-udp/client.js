var dgram = require('dgram');

var message = new Buffer("a datagram for you");
var client = dgram.createSocket("udp4");
client.send(message, 0, message.length, 900913, "localhost", function(err, bytes) {
  client.close();
});