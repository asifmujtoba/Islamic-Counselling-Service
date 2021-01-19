const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// setting user schema
const BookingSchema = new Schema({
   date: {
    type: Date,
    required: true,
    unique: false
  },
  
  time: {
    type: String,
    required: true,
  },
  
  consultant: {
    type: String,
    lowercase: true,
    unique:false,
    match: [/[a-zA-Z0-9]/, 'is invalid'],
    required: [true, 'cant be blank'],
  },
  subject:{
    type: String,
    required: [true, 'cant be blank'],
  },
  message: {
    type: String,
    lowercase: true,
    unique:false,
    match: [/[a-zA-Z0-9]/, 'is invalid'],
    required: [true, 'cant be blank'],
  },
  user: {
    type: String,
    lowercase: true,
    match: [/[a-zA-Z0-9]/, 'is invalid'],
    required: [true, 'cant be blank'],
  },

});

// create booking model
const bookingModel = mongoose.model('Booking', BookingSchema);

module.exports = bookingModel;
