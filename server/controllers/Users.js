const mongoose = require("mongoose");
// const bcrypt = require("bcrypt")
const password = require('./password');

const User = mongoose.model('User');

module.exports = {
    registerUser: (req,res) => {
        User.findOne({email: req.body.email}, (err, user) =>{
            // TODO: Design method to check for user in the DB
            //  If user is in DB throw error, otherwise create user
            if (user) {
                return res.json({'error': 'That email is already in use'})
            } else if (req.body.password != req.body.passwordConfirm) {
                return  res.json({'error': 'The passwords do not match'})
            }
            // TODO: has password and validate for special characters
            password.encryptPassword(req.body.password)
        })
    },
    loginUser: (req,res) => {
        User.findById()
        // TODO: find user in DB and store session info
        password.checkPassword(req.body.password, user.password)
    },
    logoutUser: (req,res) => {
        // TODO: destroy user session and redirect to login page
    }

}