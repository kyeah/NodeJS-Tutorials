// fuck http, i'm using EXPRESS!!!

var express = require('express');
var app = express();

var writeTime = function(from, request, response) {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    iso = request.query.iso;
    var date = new Date(iso);
    var json = (from == 'parsetime'
                ? json = {'hour': date.getHours(), 'minute': date.getMinutes(), 'second': date.getSeconds()}
                : json = {'unixtime': date.getTime()});
    response.write(JSON.stringify(json));
    response.end();
}

app.get('/api/parsetime', function(request, response) {
    writeTime('parsetime', request, response);
});

app.get('/api/unixtime', function(request, response) {
    writeTime('unixtime', request, response);
});

app.listen(8000);