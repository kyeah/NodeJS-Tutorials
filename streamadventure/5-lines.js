var split = require('split');
var map   = require('through2-map');

var count = 0;
process.stdin.pipe(split()).pipe(map(function (line) {
    count++;
    return (count % 2 == 1
            ? line.toString().toLowerCase() + "\n"
            : line.toString().toUpperCase() + "\n");
})).pipe(process.stdout);