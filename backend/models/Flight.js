const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema({
    airline: {
        type: String,
        required: true
    },
    flightNumber: {
        type: String,
        required: true,
        unique: true
    },
    departureCity: {
        type: String,
        required: true
    },
    arrivalCity: {
        type: String,
        required: true
    },
    departureTime: {
        type: Date,
        required:true
    },
    arrivalTime: {
        type: Date,
        required:true
    },
    price: {
        type: Number,
        required: true
    },
    seatsAvailable: {
        type: Number,
        required: true
    },
    duration: {
        type: String,
        required:true
    },
    status: {
        type:String,
        enum: ['on-time', 'delayed', 'cancelled'],
        default: 'on-time'
    },
    flightClass: {
        type: String,
        enum: ['economy', 'business', 'first-class'],
        default: 'economy'
    }
});

module.exports = mongoose.model('Flight', flightSchema);