module.exports = function checkUsersValid(goodUsers) {
    return function testAllValid(users) {
        var invalidUsers = users.filter(function(user) {
            return goodUsers.map(function(guser) {
                return guser.id;
            }).indexOf(user.id) == -1;
        });

        return invalidUsers.length == 0;
    };
}
