//Declare variables
require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const app = express();

//connect to port number from .env file
const PORT= process.env.PORT || 4000

//connect to mongodb
mongoose
.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.g0khgvc.mongodb.net/${process.env.MONGODB_DATABASE_NAME}?retryWrites=true&w=majority`)
.then(()=> console.log('MONGODB Connected'))
.catch(err => console.log(err))

//set middleware

//enable cors 
app.use(cors())

//server static files
app.use(express.static('public'))


//Parse request
app.use(express.urlencoded({extended:true}))
app.use(express.json())


//set ejs as template
app.set('view engine', 'ejs')

//logic goes here
app.listen(PORT, () => {
    console.log("server is runing, catch it")
})







 

