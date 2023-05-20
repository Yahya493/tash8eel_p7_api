const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const routes = require('./routes/routes')
const cors = require('cors')

const PORT = process.env.PORT || 4000
const DATABASE_URL = process.env.DATABASE_URL

const app = express()
app.use(cors())
app.use(express.json())
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