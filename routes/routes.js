const express = require('express')
const { insertUser, deleteUser, getUserById, getUserByName, updateUser } = require('../helpers/userHelper')
const { insertDriver, deleteDriver, getDriverById, getDriversByUser, updateDriver } = require('../helpers/driverHelper')
const { insertBus, deleteBus, getBusById, getBusesByUser, getBusesByDriver, updateBus } = require('../helpers/busHelper')
const { insertMilestone, deleteMilestone, getMilestoneById, updateMilestone } = require('../helpers/milestoneHelper')
const { insertTrail, deleteTrail, getTrailById, updateTrail } = require('../helpers/trailHelper')
const { insertEvent, deleteEvent, getEventById, getEventsByUser, updateEvent } = require('../helpers/eventHelper')
const router = express.Router()
module.exports = router

router.post('/insertUser', insertUser)
router.delete('/deleteUser/:id', deleteUser)
router.get('/users/:id', getUserById)
router.get('/users', getUserByName)
router.patch('/updateUser/:id', updateUser)

router.post('/insertDriver', insertDriver)
router.delete('/deleteDriver/:id', deleteDriver)
router.get('/drivers/:id', getDriverById)
router.get('/drivers', getDriversByUser)
router.patch('/updateDriver/:id', updateDriver)

router.post('/insertBus', insertBus)
router.delete('/deleteBus/:id', deleteBus)
router.get('/buses/:id', getBusById)
router.get('/buses', getBusesByUser)
router.get('/busesByDriver', getBusesByDriver)
router.patch('/updateBus/:id', updateBus)

router.post('/insertMilestone', insertMilestone)
router.delete('/deleteMilestone/:id', deleteMilestone)
router.get('/milestones/:id', getMilestoneById)
router.patch('/updateMilestone/:id', updateMilestone)

router.post('/insertTrail', insertTrail)
router.delete('/deleteTrail/:id', deleteTrail)
router.get('/trails/:id', getTrailById)
router.patch('/updateTrail/:id', updateTrail)

router.post('/insertEvent', insertEvent)
router.delete('/deleteEvent/:id', deleteEvent)
router.get('/events/:id', getEventById)
router.get('/events', getEventsByUser)
router.patch('/updateEvent/:id', updateEvent)
