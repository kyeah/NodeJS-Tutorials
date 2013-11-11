var fs = require('fs');

module.exports = function(dir, filter, callback) {
    var regex = new RegExp("\\." + filter + "$");
    
    fs.readdir(dir, function(err, filenames) {
        if (err) { return callback(err); }

        /* Old Solution
        var nameArray = new Array();
        filenames.forEach( function(filename) {
            if (regex.test(filename)) {
                nameArray.push(filename);
            }
        }); */

        nameArray = filenames.filter( function(filename) {
            return regex.test(filename);
        });

        callback(null, nameArray);
    });
};                          