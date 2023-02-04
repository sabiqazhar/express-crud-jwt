const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const routesTodo = require('./routes/todo')
const routesUser = require('./routes/user')
const errorHandler = require('./middleware/errorHandler')
const notFound = require('./middleware/notfound')

dotenv.config()

const app = express()
const PORT = 8000
const options = {useNewUrlParser: true, useUnifiedTopology: true}
const local = "mongodb://localhost:27017/crudjwt"
// const online = process.env.MONGOO_URL

//app route
app.use(routesTodo) 
app.use(routesUser)
//for use this route: http://localhost:8000/api/todo
//for use this route: http://localhost:8000/api/user/
//more please check routes files.

//middleware
app.use(errorHandler)
app.use(notFound)

//server running
mongoose.connect(local, options)
 .then(
    app.listen(PORT, ()=>{
        console.info(`server has running at http://localhost:${PORT}`)
    })
 ).catch(err => {
    throw err
 })