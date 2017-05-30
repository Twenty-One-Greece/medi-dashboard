const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const SALT_WORK_FACTOR = 10

// create a schema
const adSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    year: {
        type: String,
        default: ''
    },
    yearOfUse: {
        type: String,
        default: ''
    },
    brand: {
        type: String,
        default: ''
    },
    price: {
        type: String,
        default: ''
    },
    state: {
        type: String,
        default: ''
    },
    marking: {
        type: String,
        default: ''
    },
    heads: {
        type: String,
        default: ''
    },
    lamps: {
        type: String,
        default: ''
    },
    powerSuply: {
        type: String,
        default: ''
    },
    active: {
        type: String,
        default: 'No'
    },
    featured: {
        type: String,
        default: ''
    },
    contactPhone: {
        type: String,
        default: ''
    },
    contactEmail: {
        type: String,
        default: ''
    },
    created_at: Date,
    updated_at: Date
});


// On every save, add the date
adSchema.pre('save', function(next) {
    var currentDate = new Date()
    this.updated_at = currentDate
    if (!this.created_at) this.created_at = currentDate
    next()
})

const Ad = mongoose.model('Ad', adSchema)

module.exports = Ad