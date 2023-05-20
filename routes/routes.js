const express = require('express')
const router = express.Router()
module.exports = router

const User = require('../models/user')
const insertUser = async (req, res) => {
    const user = new User({
        name: req.body.name,
        password: req.body.password,
        birthDate: req.body.date,
        address: req.body.address,
        phone: req.body.phone,
        email: req.body.email,
        image: req.body.image,
        type: req.body.type,
        description: req.body.description
    })

    try {
        const dataToSave = await user.save()
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

router.post('/insertUser', insertUser)

router.get('/data', async (req, res) => {})

router.patch('/update/:id', async (req, res) => {})

router.delete('/delete/:id', async (req, res) => {})

