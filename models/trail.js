const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    // location: {
    //     required: true,
    //     type: String
    // },
    // milestones: {
    //     required: true,
    //     type: Array
    // },
    distance: {
        required: false,
        type: Number
    },
    user: {
        required: true,
        type: String
    },
    description: {
        required: false,
        type: String
    },
})

module.exports = mongoose.model('trail', dataSchema)