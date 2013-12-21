/*
module.exports = function duckCount() {
    var count = 0;

    for (var i = 0; i < arguments.length; i++) {
        if (Object.prototype.hasOwnProperty.call(arguments[i], 'quack'))
            count++;
    };

    return count;
}
*/

// Solution that actually follows the rules...

function duckCount() {
    return Array.prototype.filter.call(arguments, function(arg) {
        return Object.prototype.hasOwnProperty.call(arg, 'quack');
    }).length;
}

module.exports = duckCount;
