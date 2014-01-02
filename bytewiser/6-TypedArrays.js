// Buffer + Typed Array
var buf = new Buffer("");

process.stdin.on('data', function(data) {
    buf = Buffer.concat([buf, data]);
});
process.stdin.on('end', function() {
    var arr = new Uint8Array(buf);
    console.log(JSON.stringify(arr));
});

/* Typed Array
process.stdin.once('data', function(data) {
    var arr = new Uint8Array(data.length);
    for (var i = 0; i < data.length; i++) { arr[i] = data[i]; }
    console.log(JSON.stringify(arr));
}*/
