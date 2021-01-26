
const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let vavoyTravelerSchema = new Schema({

    name: {
        type: String,
        required: [true, "The name is required"]
    },
    email: {
        type: String,
        required: [true, "The email is required"]
    },
    telNumber: {
        type: Number,
        required: true
    },
    startPlace: {
        type: String,
        required: [true, "The init travel is required"],
        default: "Not proportioned",
    },
    endPlace: {
        type: String,
        required: [true, "the place for end travel is required"],
        default: "Not proportioned",
    },
    initTravelHour: {
        type: String,
        required:[true, "The hour for give car is required"],
        default: "Not proportioned",
    },
    endTravelHour: {
        type: String,
        required: [true, "The hour for send car is required"],
        default: "Not proportioned",
    },
    numPassengers:{
        type: Number,
        required: [true, "The number of passengers is required"],
        default: 1,
    },
    initDate: {
        type: String,
        required: [true, "The init Date is required"],
        default: "Not proportioned"
    },
    endDate: {
        type: String,
        required: [true, "The end for return is required"],
        default: "Not proportioned"
    },
    enterpriseName: {
        type: String,
        required: [false, "You dont need enterprise Name"],
        default: "no-enterprise",
    },

});

module.exports = mongoose.model( 'Traveler', vavoyTravelerSchema );