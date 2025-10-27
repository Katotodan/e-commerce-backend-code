const mongoose = require('mongoose')
require("dotenv").config()

const dbConnection = ()=>{
    return mongoose.connect(
        process.env.MONGODB_URL
    ).then(() =>{
        console.log('Server connected to the db')
    }).catch((err) =>{
        console.log('Database connection error: ', err)
    })
}
module.exports = dbConnection