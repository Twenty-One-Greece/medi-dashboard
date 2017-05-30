const express = require('express')
const router = express.Router()
const Ad = require('../models/ad.schema.js')

router.post('/new', (req, res) => {
    const data = req.body
    const newAd = new Ad(data)
    newAd.save((err) => {
        if (err) return res.send(err)
        return res.send({ message: "New Ad Created" })
    })
})

router.post('/all', (req, res) => {
    const query = Ad.find({}).sort({ active: 1 })
    query.exec((err, ads) => {
        if (err) return res.send(err)
        return res.send(ads)
    })
})

router.post('/all-active/:active', (req, res) => {
    const query = Ad.find({ active: req.params.active }).sort({ title: 1 })
    query.exec((err, ads) => {
        if (err) return res.send(err)
        return res.send(ads)
    })
})

router.post('/all-category/:category', (req, res) => {
    const query = Ad.find({ category: req.params.category }).sort({ title: 1 })
    query.exec((err, ads) => {
        if (err) return res.send(err)
        return res.send(ads)
    })
})

router.post('/user-all/', (req, res) => {
    const data = req.body
    const query = Ad.find({ userId: data.userId }).sort({ title: 1 })
    query.exec((err, ads) => {
        if (err) return res.send(err)
        return res.send(ads)
    })
})

router.delete('/:adId', (req, res) => {
    const query = Ad.findByIdAndRemove(req.params.adId)
    query.exec((err, ad) => {
        if (err) return res.send(err)
        return res.send({ ad: ad, message: "Ad Deleted Successfully" })
    })
})

router.post('/:adId', (req, res) => {
    const query = Ad.findById(req.params.adId)
    query.exec((err, ad) => {
        if (err) return res.send(err)
        return res.send(ad)
    })
})

router.put('/', (req, res) => {
    const data = req.body
    const query = Ad.findOneAndUpdate({ _id: data._id }, data)
    query.exec((err, ad) => {
        if (err) return res.send(err)
        return res.send({ ad: ad, message: "Ad Updated Successfully" })
    })
})

router.put('/admin', (req, res) => {
    const data = req.body
    const query = Ad.findOneAndUpdate({ _id: data._id }, data)
    query.exec((err, ad) => {
        if (err) return res.send(err)
        return res.send({ ad: ad, message: "Ad Updated Successfully" })
            // Send Email
    })
})




module.exports = router;