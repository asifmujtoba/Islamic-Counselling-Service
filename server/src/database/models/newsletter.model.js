const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// setting user schema
const NewsletterSchema = new Schema({

  email: {
    type: String,
    lowercase: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'is invalid'],
    required: [true, 'cant be blank'],
  },

});

// create Feedback model
const newsletter = mongoose.model('Newsletter', NewsletterSchema);

module.exports = newsletter;
