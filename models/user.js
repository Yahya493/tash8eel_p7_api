const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    name: {
        unique: true,
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    // birthDate: {
    //     required: false,
    //     type: Date
    // },
    // address: {
    //     required: true,
    //     type: String
    // },
    // phone: {
    //     unique: true,
    //     required: true,
    //     type: String
    // },
    // email: {
    //     unique: true,
    //     required: true,
    //     type: String
    // },
    // image: {
    //     required: false,
    //     type: String
    // },
    // type: {
    //     required: true,
    //     type: String
    // },
    // description: {
    //     required: false,
    //     type: String
    // },
})

module.exports = mongoose.model('user', dataSchema)