const contactController = require('../../controllers/contact.controller');

module.exports = async (req, res) => {

  const newContact = await contactController.create(
    req.body
  );
  if (!newContact) {
    res.status(400).send('Failed to save in the database');
  } else {
    res.send(newContact);
  }
};
