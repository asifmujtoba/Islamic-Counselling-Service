const contactController = require('../../controllers/contact.controller');

module.exports = async (req, res) => {
  const allContact = await contactController.getAll();
  if (allContact === null) {
    res.status(400).send('Error ocurred while getting all Contact forms data');
  } else {
    res.send(allContact);
  }
};
