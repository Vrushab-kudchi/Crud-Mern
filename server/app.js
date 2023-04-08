const express = require('express');
var cors = require('cors')
var bodyParser = require('body-parser')
const Router = require('./routes/route')

const app = express();
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', Router);


//Vps IP
app.listen(3001, '185.210.144.13', () => {
    console.log("http://185.210.144.13:3001")
})
