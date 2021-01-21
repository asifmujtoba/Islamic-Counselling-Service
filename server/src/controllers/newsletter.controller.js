const NewsletterModel = require('../database/models/newsletter.model');

module.exports = {
  create: async (newsletterData) => {
    let newNewsletterDoc;
    try {
  
      newNewsletterDoc = await NewsletterModel.create({
        email: newsletterData.email,
      });
    } catch (err) {
      console.log('An error ocurred while saving contact form  --');
      console.log(err.message);
      return null;
    }
    return newNewsletterDoc;
  },
  getAll: async () => {
    let NewsletterDoc;
    try {
      NewsletterDoc = await NewsletterModel.find();
    } catch (err) {
      console.log('An error ocurred while retrieving all Newsletter data  --');
      console.log(err.message);
      return null;
    }
    return NewsletterDoc;
  },
}