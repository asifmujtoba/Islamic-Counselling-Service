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

router.get('/', getAllBooking);
router.get('/:username', auth, getUserBooking); 
router.post('/create/:username', auth, createNewBooking); 
router.put('/:bookingId', auth, updateBooking);
router.delete('/:bookingId', auth, deleteBooking);

module.exports = router;
