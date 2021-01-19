const bookingController = require('../../controllers/booking.controller');

module.exports = async (req, res) => {
  const userBookingDoc = await bookingController.findByUsername(req.username);
  if (userBookingDoc === null) {
    res.status(400).send('There was an error while searching for publications');
  }
  if (!userBookingDoc) {
    console.log('empty');
    res.send([]);
  } else {
    res.send(userBookingDoc);
  }
};
