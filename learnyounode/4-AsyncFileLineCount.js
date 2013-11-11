var fs = require('fs');

fs.readFile(process.argv[2], "utf-8", function (err, buffer) {
    if (err) { console.log("Failed to open file."); }
    else {
        console.log(buffer.split("\n").length - 1);
    }
});