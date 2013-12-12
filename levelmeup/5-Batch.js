var fs = require('fs');
var level = require('level');
var readline = require('readline');

var db = level(process.argv[2]);

var reqBatch = db.batch();
var file = readline.createInterface({
    input: fs.createReadStream(process.argv[3]),
    terminal: false
});

file.on('line', function(data) {
    var array = data.toString().split(',');
    var cmd = array[0];
    if (cmd == 'put')
        reqBatch.put(array[1], array[2]);
    else
        reqBatch.del(array[1]);
});

file.on('close', function() {
    reqBatch.write(function(err) {
        if (err) throw err;
    });
});
