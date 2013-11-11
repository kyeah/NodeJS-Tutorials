var filterModule = require('./filterModule')

var dir = process.argv[2];
var ext = process.argv[3];

filterModule(dir, ext, function(err, data) {
    if (err) { console.log("Failed to open directory."); }
    
    data.forEach(function(filename) {
        console.log(filename);
    });
});