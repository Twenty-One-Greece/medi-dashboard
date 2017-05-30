const express = require('express')
const router = express.Router()
const User = require('../models/user.schema.js')

router.post('/register', (req, res) => {
    const data = req.body
    const newUser = new User(data)
    newUser.save((err) => {
        if (err) return res.send(err)
        return res.send({ message: "New user created" })
    })
})

router.post('/login', (req, res) => {
    const data = req.body
    User.findOne({ username: data.username }, (err, user) => {
        if (user) user.comparePassword(data.password, function(err, isMatch) {
            if (err) return res.send(err)
            if (isMatch && user.admin != 'Yes' && !data.user) return res.send({ err: true, message: 'Not Authorized' })
            if (isMatch) return res.send({ user: user, message: 'Logged In Successfully' })
            return res.send({ err: true, message: 'Wrong password' })
        })
        else return res.send({ err: true, message: 'No user found' })
    })
})

router.post('/all', (req, res) => {
    const query = User.find({}).sort({ created_at: 1 })
    query.exec((err, users) => {
        if (err) return res.send(err)
        return res.send(users)
    })
})

router.post('/one/:userId', (req, res) => {
    const query = User.findOne({ _id: req.params.userId })
    query.exec((err, user) => {
        if (err) return res.send(err)
        return res.send(user)
    })
})

router.put('/', (req, res) => {
    const data = req.body
    const query = User.findOneAndUpdate({ _id: data._id }, data)
    query.exec((err, user) => {
        if (err) return res.send(err)
        return res.send({ user: user, message: "User Updated Successfully" })
    })
})




module.exports = router;