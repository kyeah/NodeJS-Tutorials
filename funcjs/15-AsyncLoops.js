function loadUsers(userIds, load, done) {

    var users = [];
    var numLoaded = 0;
    
    function loadUser(index) {
        load(userIds[index], function(result) {
            users[index] = result;
            numLoaded++;
            
            if (numLoaded == userIds.length) {
                done(users);
            }
        });
    }
    
    // Synchronized
    userIds.forEach(function(id,  index) {
        // Asynchronous, non-blocking. More efficient than setTimeout.
        process.nextTick(loadUser.bind(loadUser, index));  
    });
}

module.exports = loadUsers;
