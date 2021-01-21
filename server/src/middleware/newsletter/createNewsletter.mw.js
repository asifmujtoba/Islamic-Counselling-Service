const newsletterController = require('../../controllers/newsletter.controller');

module.exports = async (req, res) => {

  const newNewsletter = await newsletterController.create(
    req.body
  );
  if (!newNewsletter) {
    res.status(400).send('Failed to save in the database');
  } else {
    res.send(newNewsletter);
  }
};
