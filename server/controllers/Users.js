const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const User = mongoose.model('User')

module.exports = {
    registerUser: (req,res) => {
        User.findOne({email: req.body.email}, (err, user) =>{
            // TODO: Design method to check for user in the DB
            // TODO: If user is in DB throw error, otherwise create user
            // TODO: has password and validate for special characters
        })
    },
    loginUser: (req,res) => {
        User.findById()
        // TODO: find user in DB and store session info
    },
    logoutUser: (req,res) => {
        // TODO: destroy user session and redirect to login page
    }

}