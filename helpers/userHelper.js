const User = require('../models/user')

const insertUser = async (req, res) => {
    const user = new User({
        name: req.body.name,
        password: req.body.password,
        // birthDate: req.body.birthDate,
        // address: req.body.address,
        // phone: req.body.phone,
        // email: req.body.email,
        // image: req.body.image,
        // type: req.body.type,
        // description: req.body.description
    })

    // const user = new User(req.body)

    try {
        const dataToSave = await user.save()
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.body._id)
        res.send(user==null?{}:user)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const getUserByName = async (req, res) => {
    try {
        const users = await User.find({name: req.body.name})
        const user = users.length===0?{}:users[0]
        res.send(user)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const getUser = async (req, res) => {
    if(req.body._id) {
        getUserById(req, res)
        return
    }

    if(req.body.name) {
        getUserByName(req, res)
        return
    }

    res.send({})
}

const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndRemove(req.params.id)
        const status = user?'deleted':'not found'
        res.send({status: status, data:user})
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const updateUser = async (req, res) => {
    try {
        const id = req.body._id
        const updatedUser = {
            name: req.body.name,
            password: req.body.password,
        }
        const options = {new: true}

        const data = await User.findByIdAndUpdate(id, updatedUser, options)
        res.send(data)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = {
    insertUser,
    getUserById,
    getUserByName,
    getUser,
    deleteUser,
    updateUser,

}