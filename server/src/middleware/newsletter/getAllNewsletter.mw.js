const newsletterController = require('../../controllers/newsletter.controller');

module.exports = async (req, res) => {
  const allNewsletter = await newsletterController.getAll();
  if (allNewsletter === null) {
    res.status(400).send('Error ocurred while getting all Newsletter forms data');
  } else {
    res.send(allNewsletter);
  }
};
