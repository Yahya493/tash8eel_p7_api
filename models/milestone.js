const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    location: {
        required: true,
        type: String
    },
    photos: {
        required: false,
        type: Array
    },
    description: {
        required: false,
        type: String
    },
})

module.exports = mongoose.model('milestone', dataSchema)