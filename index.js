const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const routes = require('./routes/routes')
const cors = require('cors')
// const fileUpload = require('express-fileupload');

const PORT = process.env.PORT || 3000
const DATABASE_URL = process.env.DATABASE_URL

const app = express()
app.use(cors())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Allow requests from all domains (*)
    // res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE'); // Allow specific HTTP methods
    // res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); // Allow specific headers
    next();
});

app.use(express.json())
app.use('/uploads', express.static('uploads'));

app.use('/api', routes)

app.listen(PORT, () => {console.log(`Server started at ${PORT}`)})

mongoose.connect(DATABASE_URL)
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.on('connected', () => {
    console.log('Database connected')
})