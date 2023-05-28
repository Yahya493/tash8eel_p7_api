const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    phone: {
        required: true,
        type: String
    },
})

module.exports = mongoose.model('driver', dataSchema)