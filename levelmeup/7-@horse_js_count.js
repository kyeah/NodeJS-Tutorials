module.exports = function(db, date, callback) {
    var tweetCount = 0;
    var stream = db.createReadStream({ start: date })

    stream.on('data', function(data) {
        tweetCount++;
    });
    stream.on('error', function(err) {
        if (callback)
            return callback(err);
        return null
    });
    stream.on('end', function() {
        if (callback)
            return callback(null, tweetCount);
        return null
    });

};
