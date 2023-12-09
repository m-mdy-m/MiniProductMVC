const express = require('express')
const bodyParser = require("body-parser")
const app = express()
const path = require("path")
const controllersErr = require('./controllers/error.js')
app.set("view engine" , "ejs")
app.set("views", "views")
app.use(bodyParser.urlencoded({extended : false}))
app.use(express.static(path.join(__dirname, 'public')))
const home = require("./routes/home.js")
app.use(home)
app.use(controllersErr.err404)


app.listen(3000, ()=>{
    console.log('run server on port 3000');
})