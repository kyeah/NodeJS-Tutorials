module.exports = function(db, date, callback) {
    var tweets = [];
    var stream = db.createReadStream({ start: date, end: date+"\xff" });
    // \x00 denotes start of single-byte char range, \xff end of range

    stream.on('data', function(data) {
        tweets.push(data.value);
    });
    stream.on('error', function(err) {
        if (callback)
            return callback(err);
        return null
    });
    stream.on('end', function() {
        if (callback)
            return callback(null, tweets);
        return null
    });

};
