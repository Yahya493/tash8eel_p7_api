const express = require('express')
const { insertUser, deleteUser, getUserById, updateUser } = require('../helpers/userHelper')
const router = express.Router()
module.exports = router

router.post('/insertUser', insertUser)
router.delete('/deleteUser/:id', deleteUser)
router.get('/users/:id', getUserById)
router.patch('/updateUser/:id', updateUser)
