var level = require('level');
var db = level(process.argv[2]);

var fetchNext = function(i) {
    var gibber = 'gibberish' + i;
    db.get(gibber, function(err, value) {
        if (err && err.type != 'NotFoundError')
            throw err;

        if (!err)
            console.log(gibber + "=" + value);

        if (i < 100)
            fetchNext(i+1);
    });
};

fetchNext(0);


/************************
 *** ASYNC APPROACHES ***
 ************************/

// Function Approach
// for (var i = 0; i <= 100; i++) {

//     (function(i) {
//         var gibber = 'gibberish' + i;
//         db.get(gibber, function(err, value) {
//             if (err && err.type != 'NotFoundError')
//                 throw err;

//             if (!err)
//                 console.log(gibber + "=" + value);
//         });
//     })(i);
//}

// Foreach Approach
// var range = [];
// for (var i = 0; i <= 100; i++) {
//     range.push(i);
// }

// range.forEach(function(i) {
//     var gibber = 'gibberish' + i;
//     db.get(gibber, function(err, value) {
//         if (err && err.type != 'NotFoundError')
//             throw err;

//         if (!err)
//             console.log(gibber + "=" + value);
//     });
// });
