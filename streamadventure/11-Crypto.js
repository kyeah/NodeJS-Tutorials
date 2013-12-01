var crypto = require('crypto');
var cryptStream = crypto.createDecipher('aes256', process.argv[2]);
process.stdin.pipe(cryptStream).pipe(process.stdout);

