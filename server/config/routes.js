// Require the controllers from '../controllers/<file name>
const user = require('../controllers/Users')
const bicycles = require('../controllers/Bicycles')
const path = require('path')
// Create the exports
module.exports = (app) => {
    // Create routes for API behind ngBicycleMarketplace
    app.post('/register', (req,res) => {
        console.log('in the routes: ', req.body)
        user.registerUser(req,res)
    });
    app.post('/login', (req,res) => {
        user.loginUser(req,res)
    })
    app.delete('/logout', (req, res) => {
        user.logoutUser(req,res)
    })
    app.all("*", (req,res,next) => {
            res.sendFile(path.resolve("./public/dist/public/index.html"))
        })
}
