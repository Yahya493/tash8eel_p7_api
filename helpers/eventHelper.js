const Event = require('../models/event')

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
        description: req.body.description
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
        const event = await Event.findById(req.params.id)
        res.send(event)
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
        const id = req.params.id
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
            description: req.body.description
        }
        const options = { new: true }

        const data = await Event.findByIdAndUpdate(id, updatedEvent, options)
        res.send(data)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = {
    insertEvent,
    getEventById,
    deleteEvent,
    updateEvent,

}