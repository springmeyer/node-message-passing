var fork = require('child_process').fork;

var child = fork(__dirname + '/child.js');

child.on('message', function(data) {
    console.log('parent: got message from child: ' + data);
});

child.send('hello from your parent');