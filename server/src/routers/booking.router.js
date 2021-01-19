const express = require('express');
const router = express.Router();
const {
  getAllBooking,
  getUserBooking,
  createNewBooking,
  updateBooking,
  deleteBooking,
  getParams,
} = require('../middleware/booking');
const auth = require('../utils/auth');

router.param('username', getParams.getParamsUsername);
router.param('bookingId', getParams.getParamsBookingId);

router.get('/', auth, getAllBooking);
router.get('/:username', auth, getUserBooking); // postsByUsername - get the posts from a user
router.post('/create/:username', auth, createNewBooking); // create a post with ref to a user
router.put('/:bookingId', auth, updateBooking);
router.delete('/:bookingId', auth, deleteBooking);

module.exports = router;
