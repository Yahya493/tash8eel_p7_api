const Event = require('../models/event')
const { findById } = require('../models/user')

const insertEvent = async (req, res) => {
    const event = new Event({
        name: req.body.name,
        validFrom: req.body.validFrom,
        validTo: req.body.validTo,
        departureTime: req.body.departureTime,
        arrivalTime: req.body.arrivalTime,
        departureLocation: req.body.departureLocation,
        arrivalLocation: req.body.arrivalLocation,
        trail: req.body.trail,
        buses: req.body.buses,
        numberOfPerson: req.body.numberOfPerson,
        duration: req.body.duration,
        photos: req.body.photos,
        fees: req.body.fees,
        publishDate: req.body.publishDate,
        description: req.body.description,
        user: req.body.user,
    })

    try {
        const dataToSave = await event.save()
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const getEventById = async (req, res) => {
    try {
        const event = await Event.findById(req.body._id)
        res.send(event)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const getEventsByUser = async (req, res) => {
    try {
        const events = await Event.find({ user: req.body.user })
        res.send(events)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const getEvents = async (req, res) => {
    if (req.body._id) {
        getEventById(req, res)
        return
    }

    if (req.body.user) {
        getEventsByUser(req, res)
        return
    }

    res.send({})
}

const getAllEvents = async (req, res) => {
    try {
        const events = await Event.find()
        res.send(events)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const deleteEvent = async (req, res) => {
    try {
        const event = await Event.findByIdAndRemove(req.params.id)
        const status = event ? 'deleted' : 'not found'
        res.send({ status: status, data: event })
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const updateEvent = async (req, res) => {
    try {
        const id = req.body._id
        const updatedEvent = {
            name: req.body.name,
            validFrom: req.body.validFrom,
            validTo: req.body.validTo,
            departureTime: req.body.departureTime,
            arrivalTime: req.body.arrivalTime,
            departureLocation: req.body.departureLocation,
            arrivalLocation: req.body.arrivalLocation,
            trail: req.body.trail,
            buses: req.body.buses,
            numberOfPerson: req.body.numberOfPerson,
            duration: req.body.duration,
            photos: req.body.photos,
            fees: req.body.fees,
            publishDate: req.body.publishDate,
            description: req.body.description,
            user: req.body.user,
        }
        const options = { new: true }

        const data = await Event.findByIdAndUpdate(id, updatedEvent, options)
        res.send(data)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// const uploadPhotoToEvent = async (req, res, fileURL) => {
//     try {
//         const id = req.body._id
//         const event = await Event.findById(id)
//         const updatedEvent = {
//             // ...event,
//             photos: [...event.photos, `${fileURL}`]
//         }
//         const options = { new: true }

//         const data = await Event.findByIdAndUpdate(id, updatedEvent, options)
//         res.send(data)
//     }
//     catch (error) {
//         res.status(400).json({ message: error.message })
//     }
// }

module.exports = {
    insertEvent,
    getEvents,
    getAllEvents,
    deleteEvent,
    updateEvent,
    // uploadPhotoToEvent,
}