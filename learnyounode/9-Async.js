var http  = require('http');
var bl    = require('bl');
var async = require('async');

var urls = process.argv.splice(2);
var useAsync = true;

if (useAsync) {
    var requests = new Array();
    
    urls.forEach(function (url) {
        requests.push(function(callback) {
            http.get(url, function(response) {
                response.pipe(bl(function (err, data) {
                    callback(err, data.toString());
                }));
            });
        });
    });
    
    async.parallel(requests, function(err, results) {
        if (err) return console.error(err);
        for (var i = 0; i < results.length; i++)
            console.log(results[i]);
    });
}