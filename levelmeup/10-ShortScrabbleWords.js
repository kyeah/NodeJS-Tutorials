// Database Format: key = <length>WORD, value = WORD

module.exports.init = function (db, words, callback) {
    var operations = words.map(function(word) {
        var key = word.length + word;
        return { type: 'put', key: key, value: word };
    });

    db.batch(operations);
    return callback();
}

module.exports.query = function (db, word, callback) {
    var prefix = word.length + word.replace(/\*/g, '');

    var stream = db.createReadStream({
        start: prefix,
        end:   prefix+"\xff"
    });

    var words = [];

    stream.on('data', function(data) {
        words.push(data.value);
    });
    stream.on('error', function(err) {
        return callback(err);
    });
    stream.on('end', function() {
        return callback(null, words);
    });
}
