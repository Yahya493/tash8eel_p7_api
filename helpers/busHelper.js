const Bus = require('../models/bus')

const insertBus = async (req, res) => {
    const bus = new Bus({
        name: req.body.name,
        driver: req.body.driver,
        seats: req.body.seats,
        description: req.body.description,
        user: req.body.user,
    })

    try {
        const dataToSave = await bus.save()
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const getBusById = async (req, res) => {
    try {
        const bus = await Bus.findById(req.params.id)
        res.send(bus)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const getBusesByUser = async (req, res) => {
    try {
        const buses = await Bus.find({user: req.query.user})
        res.send(buses)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const getBusesByDriver = async (req, res) => {
    try {
        const buses = await Bus.find({
            user: req.query.user,
            driver: req.query.driver,
        })
        res.send(buses)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const deleteBus = async (req, res) => {
    try {
        const bus = await Bus.findByIdAndRemove(req.params.id)
        const status = bus?'deleted':'not found'
        res.send({status: status, data:bus})
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const updateBus = async (req, res) => {
    try {
        const id = req.params.id
        const updatedBus = {
            name: req.body.name,
            driver: req.body.driver,
            seats: req.body.seats,
            description: req.body.description,
            user: req.body.user,
        }
        const options = {new: true}

        const data = await Bus.findByIdAndUpdate(id, updatedBus, options)
        res.send(data)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = {
    insertBus,
    getBusById,
    getBusesByUser,
    getBusesByDriver,
    deleteBus,
    updateBus,

}