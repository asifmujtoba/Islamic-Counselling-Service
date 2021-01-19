const bookingController = require('../../controllers/booking.controller');

module.exports = async (req, res) => {

  const newBooking = await bookingController.create(
    req.username,
    req.body
    
  );
  if (!newBooking) {
    res.status(400).send('Failed to save in the database');
  } else {
    res.send(newBooking);
  }
};
