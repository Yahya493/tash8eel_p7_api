const Trail = require('../models/trail')
const Milestone = require('../models/milestone')
const Photo = require('../models/photo')

const insertTrail = async (req, res) => {
    const trail = new Trail({
        name: req.body.name,
        // location: req.body.location,
        // milestones: req.body.milestones,
        distance: req.body.distance,
        user: req.body.user,
        description: req.body.description
    })

    try {
        const dataToSave = await trail.save()
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const getTrailById = async (req, res) => {
    try {
        const trail = await Trail.findById(req.body._id)
        res.send(trail)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const getTrailByUser = async (req, res) => {
    try {
        const trail = await Trail.find({ user: req.body.user })
        res.send(trail)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const getTrails = async (req, res) => {
    if (req.body._id) {
        getTrailById(req, res)
        return
    }

    if (req.body.user) {
        getTrailByUser(req, res)
        return
    }

    res.send({})
}

const deleteTrail = async (req, res) => {
    try {
        const milestones = await Milestone.find({ trail: req.body._id })
        if (milestones) {
            for (const milestone of milestones) {
                for (const photoId of milestone.photos) {
                    await Photo.findByIdAndDelete(photoId)
                }
                await Milestone.findByIdAndDelete(milestone._id)
            }

        }
        const trail = await Trail.findByIdAndRemove(req.body._id)
        const status = trail ? 'deleted' : 'not found'
        res.send({ status: status, data: trail })
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const updateTrail = async (req, res) => {
    try {
        const id = req.body._id
        const updatedTrail = {
            name: req.body.name,
            // location: req.body.location,
            // milestones: req.body.milestones,
            distance: req.body.distance,
            user: req.body.user,
            description: req.body.description
        }
        const options = { new: true }

        const data = await Trail.findByIdAndUpdate(id, updatedTrail, options)
        res.send(data)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = {
    insertTrail,
    getTrails,
    deleteTrail,
    updateTrail,

}