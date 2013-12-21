module.exports = function countWords(inputWords) {
    
    return inputWords.reduce(function(prev, curr, index, array) {
        prev[curr] = ++prev[curr] || 1;
        return prev;
    }, {} );
}
