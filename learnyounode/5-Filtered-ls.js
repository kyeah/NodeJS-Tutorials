var fs = require('fs');
var path = process.argv[2];
var extMatch = new RegExp("\\." + process.argv[3] + "$");

fs.readdir(path, function(err, filenames) {
    if (err) { console.log("Failed to open directory."); }
    else {
        filenames.forEach( function(filename) {
            if (filename.match(extMatch)) {
                console.log(filename);
            }
        });
    }
});

