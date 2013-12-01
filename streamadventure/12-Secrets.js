var map = require('through2-map');
var zlib = require('zlib');
var tar = require('tar');
var crypto = require('crypto');

var cipherName = process.argv[2];
var cipherPass = process.argv[3];
var decrypter = crypto.createDecipher(cipherName, cipherPass);
var encrypter = crypto.createHash('md5', { encoding: 'hex' });

var parser = tar.Parse();
parser.on('entry', function (entry) {
    if (entry.type == 'File') {
        entry.pipe(encrypter).pipe(map(function (data) {
            return data + ' ' + entry.path + '\n';
        })).pipe(process.stdout);
    }
});

process.stdin.pipe(decrypter).pipe(zlib.createGunzip()).pipe(parser);
