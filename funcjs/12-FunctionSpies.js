function Spy(target, method) {
    var fn = target[method];
    
    var result = {
        count: 0
    };

    target[method] = function() {
        result.count++;
        return fn.apply(target, arguments);
    };

    return result;
}

module.exports = Spy;
