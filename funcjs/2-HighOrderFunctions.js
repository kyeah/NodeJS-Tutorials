function repeatR(operation, num) {
    if (num <= 0) return;
    operation();
    repeatR(operation, num - 1);
}

function repeatI(operation, num) {
    for (var i = 0; i < num; i++) {
        operation();
    }
}

module.exports = repeatI;
