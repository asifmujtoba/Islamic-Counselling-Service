const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// setting user schema
const ContactSchema = new Schema({
  name: {
        type: String, 
        required:[true, 'cant be blank'],
    },
  email: {
    type: String,
    lowercase: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'is invalid'],
    required: [true, 'cant be blank'],
  },
  phone: {
    type: String,
    lowercase: true,
    unique:false,
    match: [/[+0-9]/, 'is invalid'],
    required: [true, 'cant be blank'],
  },
  message: {
    type: String,
    required: [true, 'cant be blank'],
  },

});

// create Feedback model
const contact = mongoose.model('Contact', ContactSchema);

module.exports = contact;
