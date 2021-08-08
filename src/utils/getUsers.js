function getUsers() {
    const users = [];
    let index = 1;
    while (index <= 100) {
        let userStructure = {};

        userStructure.id = index;
        userStructure.name = "user " + index;
        userStructure.clicks = 0;

        users.push(userStructure);

        index++;
    }

    return users;
};

module.exports = {
    getUsers,
}