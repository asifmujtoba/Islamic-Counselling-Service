const ContactModel = require('../database/models/contact.model');

module.exports = {
  create: async (contactData) => {
    let newContactDoc;
    try {
  
      newContactDoc = await ContactModel.create({
        name: contactData.name,
        email: contactData.email,
        phone: contactData.phone,
        message: contactData.message,
      });
    } catch (err) {
      console.log('An error ocurred while saving contact form  --');
      console.log(err.message);
      return null;
    }
    return newContactDoc;
  },
  getAll: async () => {
    let ContactDoc;
    try {
      ContactDoc = await ContactModel.find();
    } catch (err) {
      console.log('An error ocurred while retrieving all contact forms data  --');
      console.log(err.message);
      return null;
    }
    return ContactDoc;
  },
}