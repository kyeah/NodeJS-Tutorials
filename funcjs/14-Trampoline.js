function repeat(operation, num) {
    if (num <= 0) return;
    operation();
    return repeat.bind(repeat, operation, num - 1);
}

function trampoline(fn) {
    while (fn && typeof fn === 'function') {
        fn = fn();
    }
}

module.exports = function(operation, num) {
    trampoline(repeat.bind(repeat, operation, num));
}
