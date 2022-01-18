const db = require("../models");
const User = db.users;

module.exports = getLoggedUserId = async () => {
    const user = await User.findOne({where: {logged: true}})

    if (user) {
        return user.id
    }
    throw new Error()
}