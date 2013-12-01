var map = require('through2-map')
var trumpet = require('trumpet')
var fs = require('fs')

var tr = trumpet();
tr.pipe(process.stdout);

var stream = tr.createStream('.loud');
stream.pipe(map(function (buf) {
    return buf.toString().toUpperCase();
})).pipe(stream);

process.stdin.pipe(tr);
