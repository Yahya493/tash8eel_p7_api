const express = require('express')
const { insertUser, deleteUser, getUser, updateUser } = require('../helpers/userHelper')
const { insertDriver, deleteDriver, getDrivers, updateDriver } = require('../helpers/driverHelper')
const { insertBus, deleteBus, getBuses, updateBus } = require('../helpers/busHelper')
const { insertMilestone, deleteMilestone, getMilestones, updateMilestone } = require('../helpers/milestoneHelper')
const { insertTrail, deleteTrail, getTrails, updateTrail } = require('../helpers/trailHelper')
const { insertEvent, deleteEvent, getEvents, updateEvent, getAllEvents } = require('../helpers/eventHelper')
const { insertPhoto, deletePhoto, getPhotos } = require('../helpers/photoHelper')
const router = express.Router()
module.exports = router

router.post('/insertUser', insertUser)
router.delete('/deleteUser/:id', deleteUser)
router.post('/users', getUser)
router.patch('/updateUser', updateUser)

router.post('/insertDriver', insertDriver)
router.delete('/deleteDriver/:id', deleteDriver)
router.post('/drivers', getDrivers)
router.patch('/updateDriver', updateDriver)

router.post('/insertBus', insertBus)
router.delete('/deleteBus/:id', deleteBus)
// router.get('/buses/:id', getBusById)
router.post('/buses', getBuses)
// router.get('/busesByDriver', getBusesByDriver)
router.patch('/updateBus', updateBus)

router.post('/insertMilestone', insertMilestone)
router.delete('/deleteMilestone', deleteMilestone)
router.post('/milestones', getMilestones)
router.patch('/updateMilestone', updateMilestone)

router.post('/insertTrail', insertTrail)
router.delete('/deleteTrail', deleteTrail)
router.post('/trails', getTrails)
router.patch('/updateTrail', updateTrail)

router.post('/insertEvent', insertEvent)
router.delete('/deleteEvent/:id', deleteEvent)
router.post('/events', getEvents)
router.get('/events', getAllEvents)
router.patch('/updateEvent', updateEvent)

///
router.post('/uploadPhoto', insertPhoto)
router.post('/photos', getPhotos)
router.delete('/deletePhoto', deletePhoto)
///

// const multer = require('multer');
// const path = require('path')
// const PORT = process.env.PORT || 3000
// const API_URL = process.env.API_URL + ':' + PORT
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "./uploads")
//     },
//     filename: (req, file ,cb) => {
//         // console.log(file)
//         cb(null, Date.now() + path.extname(file.originalname))
//     }
// })
// const upload = multer({ storage: storage});

// router.post('/upload', upload.single('file'), (req, res) => {

//     if (!req.file) {
//         return res.status(400).json({ error: 'No file uploaded' });
//     }
//     const fileURL = `${API_URL}/${req.file.path.replace('\\', '/')}`

//     res.status(200).send({ url: fileURL });
// })
