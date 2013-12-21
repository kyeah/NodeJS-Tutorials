module.exports = function reduce(array, fn, initVal) {
    var reduceH = function(index, initVal) {
        if (index >= array.length) return initVal;
        else return reduceH(index + 1, fn(initVal, array[index], index, array));
    }

    return reduceH(0, initVal);
}
