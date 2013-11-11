var args = process.argv.slice(2);

var sum = 0;
args.forEach(function(val) { sum += +val; });

console.log(sum);