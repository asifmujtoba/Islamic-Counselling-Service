const bookingController = require('../../controllers/booking.controller');

module.exports = async (req, res) => {
  const allBooking = await bookingController.getAll();
  if (allBooking === null) {
    res.status(400).send('Error ocurred while getting all Booking');
  } else {
    res.send(allBooking);
  }
};
