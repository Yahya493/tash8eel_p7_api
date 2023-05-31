const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    validFrom: {
        required: true,
        type: Date
    },
    validTo: {
        required: true,
        type: Date
    },
    departureTime: {
        required: true,
        type: Date
    },
    arrivalTime: {
        required: true,
        type: Date
    },
    departureLocation: {
        required: true,
        type: String
    },
    arrivalLocation: {
        required: true,
        type: String
    },
    trail: {
        required: true,
        type: String
    },
    buses: {
        required: true,
        type: Array
    },
    numberOfPerson: {
        required: true,
        type: Number
    },
    duration: {
        required: true,
        type: Number
    },
    photos: {
        required: false,
        type: Array
    },
    fees: {
        required: true,
        type: Number
    },
    publishDate: {
        required: true,
        type: Date
    },
    description: {
        required: false,
        type: String
    },
    user: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('event', dataSchema)