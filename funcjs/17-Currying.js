function curryN(fn, n) {
    n = n || fn.length;
    if (n <= 1) return fn;

    return function(arg) {
        return curryN(fn.bind(fn, arg), n - 1);
    }
}

module.exports = curryN;
