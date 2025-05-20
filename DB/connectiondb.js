const mongoose = require('mongoose')
require("dotenv").config()

const dbConnection = ()=>{
    return mongoose.connect(
        process.env.MONGODB_URL
    ).then(
        console.log('Server connected to the db')
    )
}
module.exports = dbConnection