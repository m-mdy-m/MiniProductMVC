const express = require('express')
const bodyParser = require("body-parser")
const app = express()


app.engine("view engine" , "ejs")
app.set("views", "views")
app.use(bodyParser.urlencoded({extended : false}))

app.use((req,res)=>{
})
app.listen(3000, ()=>{
    console.log('run server on port 3000');
})