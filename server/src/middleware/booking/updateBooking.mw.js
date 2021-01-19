const bookingController = require('../../controllers/booking.controller');

module.exports = async (req, res) => {
  const updatedBookingDoc = await bookingController.update(req.bookingId, req.body);
  if (updatedBookingDoc === null) {
    res.status(400).send('error ocurred while updating this booking');
  }
  if (!updatedBookingDoc) {
    res.status(404).send('booking not found');
  }
  res.send(updatedBookingDoc);
};
