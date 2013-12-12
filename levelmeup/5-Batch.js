var fs = require('fs');
var level = require('level');
var db = level(process.argv[2]);

var reqBatch = db.batch();
var file = fs.readFileSync(process.argv[3]).toString().split("\n");

file.forEach(function(data) {
    var array = data.toString().split(',');
    var cmd = array[0];
    if (cmd == 'put')
        reqBatch.put(array[1], array[2]);
    else
        reqBatch.del(array[1]);
});

reqBatch.write(function(err) {
    if (err) throw err;
});
