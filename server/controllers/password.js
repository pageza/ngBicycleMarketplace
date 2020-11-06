const bcrypt = require("bcrypt")

module.exports = {
    encryptPassword(password) {
        bcrypt.hash(password, 10)
            // TODO: Look into asynce/await for checking the password for special characters
    },
    checkPassword(password) {
        bcrypt.compare(password, savedPassword)
            // TODO: async/await to assign session or JWT data
    }
}