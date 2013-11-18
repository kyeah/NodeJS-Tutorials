var http   = require('http')
var moment = require('moment')
var fs     = require('fs')

var server = http.createServer(function (request, response) {
    var stream = fs.createReadStream(process.argv[2]);
    stream.pipe(response);
});
server.listen(8000);