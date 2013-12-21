function arrayMap(array, fn) {
    return array.reduce(function (prev, curr) {
        return prev.concat(fn(curr));
    }, [] );
}

module.exports = arrayMap;
