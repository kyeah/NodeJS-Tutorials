var net = require('net');
var multilevel = require('multilevel');

var db = multilevel.client();
var connection = net.connect(4545);
connection.pipe(db.createRpcStream()).pipe(connection);

db.get('multilevelmeup', function(err, value) {
    if (err) throw err;
    console.log(value);
    connection.end();
});
