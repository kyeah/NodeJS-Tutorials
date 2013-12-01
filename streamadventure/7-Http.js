var http = require('http');
var map = require('through2-map');

var server = http.createServer(function (request, response) {
    if (request.method === 'POST') {
        request.pipe(map(function (data) {
            return data.toString().toUpperCase();
        })).pipe(response);
        response.end();
    }
});

server.listen(8000);
