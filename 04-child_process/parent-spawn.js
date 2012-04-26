var spawn = require('child_process').spawn;

function format(type, output) {
  console.log('child says (' + type + '): ' + output);
}

var child = spawn('node',['child.js']);
child.stdout.on('data', format.bind(global,'stdout'));
child.stderr.on('data', format.bind(global,'stderr'));
