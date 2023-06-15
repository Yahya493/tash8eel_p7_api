const Milestone = require('../models/milestone')

const insertMilestone = async (req, res) => {
    const milestone = new Milestone({
        name: req.body.name,
        location: req.body.location,
        photos: req.body.photos,
        trail: req.body.trail,
        description: req.body.description
    })

    try {
        const dataToSave = await milestone.save()
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const getMilestoneById = async (req, res) => {
    try {
        const milestone = await Milestone.findById(req.body._id)
        res.send(milestone)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const deleteMilestone = async (req, res) => {
    try {
        const milestone = await Milestone.findByIdAndRemove(req.body._id)
        const status = milestone?'deleted':'not found'
        res.send({status: status, data:milestone})
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const updateMilestone = async (req, res) => {
    try {
        const id = req.body._id
        const updatedMilestone = {
            name: req.body.name,
            location: req.body.location,
            photos: req.body.photos,
            trail: req.body.trail,
            description: req.body.description
        }
        const options = {new: true}

        const data = await Milestone.findByIdAndUpdate(id, updatedMilestone, options)
        res.send(data)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = {
    insertMilestone,
    getMilestoneById,
    deleteMilestone,
    updateMilestone,

}