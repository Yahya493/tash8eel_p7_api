const Photo = require('../models/photo')

const insertPhoto = async (req, res) => {
    const photo = new Photo({
        sourceType: req.body.sourceType,
        sourceId: req.body.sourceId,
        myFile: req.body.myFile,
    })

    try {
        const dataToSave = await photo.save()
        res.status(200).json({ _id: dataToSave._id })
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const getPhotoById = async (req, res) => {
    try {
        const photo = await Photo.findById(req.body._id)
        res.send(photo == null ? {} : photo)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const getPhotosBySource = async (req, res) => {
    const sourceType = req.body.sourceType
    const sourceId = req.body.sourceId
    try {
        const photo = await Photo.find({ sourceType: sourceType, sourceId: sourceId })
        res.send(photo == null ? {} : photo)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const getPhotos = async (req, res) => {
    if (req.body._id) {
        getPhotoById(req, res)
        return
    }

    if (req.body.sourceType && req.body.sourceId) {
        getPhotosBySource(req, res)
        return
    }

    getNumberOfPhotos(req, res)
    // res.send({})
}

const deletePhoto = async (req, res) => {
    try {
        const photo = await Photo.findByIdAndRemove(req.body._id)
        const status = photo ? 'deleted' : 'not found'
        res.send({ status: status, data: photo })
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const getNumberOfPhotos = async (req, res) => {
    try {
        const photos = await Photo.find()
        res.send(photos.length)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }

}

module.exports = {
    insertPhoto,
    getPhotos,
    deletePhoto,
}