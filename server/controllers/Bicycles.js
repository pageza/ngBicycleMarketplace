const mongoose = require("mongoose")

const Bicycle = mongoose.model('Bicycle')
const User = mongoose.model('User')

module.exports = {
    createBicycle: (req,res) => {
        // TODO: Find user and add bicycle
    },
    deleteBicycle: (req,res) => {
        // TODO: Find user and delete bicycle
        Bicycle.findByIdAndDelete()
    },
    updateBicycle: (req,res) => {
        // TODO: Find user and update bicycle
        Bicycle.findByIdAndUpdate()
    }
}