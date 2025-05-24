const express = require('express')
const dbConnection = require('./DB/connectiondb')
const routes = require('./Routes/route')
require("dotenv").config()
const cors = require('cors')


const app = express()
const PORT = process.env.PORT || 3000


// Middleware
// app.use(cors({
//     origin:process.env.FRONTEND_URL,
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     allowedHeaders: [
//         'Content-Type', 
//         'Authorization', 
//         'Access-Control-Allow-Credentials', 
//         'Access-Control-Allow-Origin',
//     ],
//     credentials: true
// }))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use("", routes)
app.get("/test", (req, res)=>{
    res.send("<h2>Trying succeded</h2>")
})
const startApp = async() =>{
    try {
        await dbConnection()
        app.listen(PORT, console.log('Server is listening on port ' +PORT+'....'))
    } catch (error) {
        console.log(error)
    }
}
startApp()
