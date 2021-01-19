const getParamsUsername = (req, res, next, username) => {
  req.username = username;
  next();
};

const getParamsBookingId = (req, res, next, bookingId) => {
  req.bookingId = bookingId;
  next();
};

module.exports = { getParamsUsername, getParamsBookingId };
