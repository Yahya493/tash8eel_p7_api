const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    driver: {
        required: true,
        type: String
    },
    seats: {
        required: true,
        type: Number
    },
    description: {
        required: false,
        type: String
    },
})

module.exports = mongoose.model('bus', dataSchema)