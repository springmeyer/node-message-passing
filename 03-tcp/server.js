var net = require('net');

var server = net.createServer(function(socket) {
  console.log('server connected with client on port ' + server.address().port);
  socket.write('server sends a tcp message for you\r\n');
  socket.pipe(socket);
});
server.listen(8080);
