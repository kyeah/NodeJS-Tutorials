var buf = new Buffer("");
 
process.stdin.on('data', function(chunk) {
    buf = Buffer.concat([buf, chunk]);
});
process.stdin.on('end', function() {
    console.log(buf);
});
