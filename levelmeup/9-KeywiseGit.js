var fs = require('fs');
var level = require('level');
var db = level(process.argv[2], { valueEncoding: 'json' });

var reqBatch = db.batch();
var obj = JSON.parse(fs.readFileSync(process.argv[3]).toString());

obj.forEach(function(obj) {
    console.error(obj);
    if (obj.type == 'user') {
        reqBatch.put(obj.name, obj);
    } else if (obj.type == 'repo') {
        reqBatch.put(obj.user+'.'+obj.name, obj);
        // ! is start of ASCII range, ~ is end, so start: <>!, end:<>!~ returns all keys beginning with <>
    }
});

reqBatch.write(function(err) {
    if (err) throw err;
});


/* Fancy Version
var data = require(process.argv[3])
var operations = data.map(function (row) {
    var key
    if (row.type == 'user')
        key = row.name
    else if (row.type == 'repo')
        key = row.user + '!' + row.name  
    return { type: 'put', key: key, value: row }
})

db.batch(operations)
*/
