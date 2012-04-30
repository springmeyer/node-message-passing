var dgram = require("dgram");

var server = dgram.createSocket("udp4");
server.on("message", function (msg, rinfo) {
  console.log("server got msg: '" + msg + "'");
});
server.on("listening", function () {
  console.log("listening on port " + server.address().port);
});
server.bind(41234);
