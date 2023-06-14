const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    // sourceType: {
    //     required: true,
    //     type: String
    // },
    // sourceId: {
    //     required: true,
    //     type: String
    // },
    myFile: {
        required: true,
        type: String
    },
})

module.exports = mongoose.model('photo', dataSchema)