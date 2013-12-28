var fs = require('fs');
var filename = process.argv[2];

/* Read File Sync */
// var file = fs.readFileSync(filename);
// var start = 0;

// for (var i = 0; i < file.length; i++) {
//     if (file[i] == 10) {
//         console.log(file.slice(start, i));
//         start = i + 1;
//     }
// }

// console.log(file.slice(start, i));

/* Using Streams */
var file = fs.createReadStream(filename);
var buf = new Buffer("");

file.on('data', function(chunk) {
    var start = 0;
    for (var i = 0; i < chunk.length; i++) {
        if (chunk[i] == 10) {
            console.log(Buffer.concat([buf, chunk.slice(start, i)]));
            buf = new Buffer("");
            start = i + 1;
        }
    }
    
    buf = Buffer.concat([buf, chunk.slice(start, i)]);
});

file.on('end', function() {
    if (buf.length > 0) console.log(buf);
});
