const Driver = require('../models/driver')

const insertDriver = async (req, res) => {
    const driver = new Driver({
        name: req.body.name,
        phone: req.body.phone,
        user: req.body.user,
    })

    try {
        const dataToSave = await driver.save()
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const getDriverById = async (req, res) => {
    try {
        const driver = await Driver.findById(req.params.id)
        res.send(driver)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const getDriversByUser = async (req, res) => {
    try {
        const drivers = await Driver.find({user: req.query.user})
        res.send(drivers)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const deleteDriver = async (req, res) => {
    try {
        const driver = await Driver.findByIdAndRemove(req.params.id)
        const status = driver?'deleted':'not found'
        res.send({status: status, data:driver})
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const updateDriver = async (req, res) => {
    try {
        const id = req.params.id
        const updatedDriver = {
            name: req.body.name,
            phone: req.body.phone,
            user: req.body.user,
        }
        const options = {new: true}

        const data = await Driver.findByIdAndUpdate(id, updatedDriver, options)
        res.send(data)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = {
    insertDriver,
    getDriverById,
    getDriversByUser,
    deleteDriver,
    updateDriver,

}