const BookingModel = require('../database/models/booking.model');
const UserModel = require('../database/models/user.model');

module.exports = {
  create: async (username, bookingData) => {
  
    try {
      const user = await UserModel.findOne({ username });
  
      const newBookingDoc = await BookingModel.create({
        date: bookingData.date,
        time: bookingData.time,
        consultant: bookingData.consultant,
        subject: bookingData.subject,
        message: bookingData.message,
        user: username
      });
      user.booking.push(newBookingDoc);
      await user.save();
      return newBookingDoc;
    } catch (err) {
      console.log('An error ocurred while registering a booking --');
      console.log(err.message);
      return null;
    }
  },
  getAll: async () => {
    let BookingsDoc;
    try {
      BookingsDoc = await BookingModel.find();
    } catch (err) {
      console.log('An error ocurred while retrieving all bookings --');
      console.log(err.message);
      return null;
    }
    return BookingsDoc;
  },
  
  findById: async userId => {
    let BookingDoc;
    try {
      BookingDoc = await BookingModel.findById(userId);
    } catch (err) {
      console.log('An error ocurred while searching for user by Id --');
      console.log(err.message);
      return null;
    }
    return userDoc;
  },
  findByUsername: async username => {
    let BookingDoc;
    try {
      BookingDoc = await UserModel.findOne({ username });
    } catch (err) {
      console.log('An error ocurred while searching for user by username --');
      console.log(err.message);
      return null;
    }

    return BookingDoc;
  },
  updateBooking: async (userId, newUserData) => {
    let updatedBookingDoc;
    try {
      updatedBookingDoc = await BookingModel.findByIdAndUpdate(userId, newUserData, {
        new: true,
      });
    } catch (err) {
      console.log('An error ocurred while updating user data --');
      console.log(err.message);
      return null;
    }
    return updatedBookingDoc;
  },
  deleteUser: async userId => {
    let statusDelete;
    try {
      statusDelete = await BookingModel.findByIdAndRemove(userId);
    } catch (err) {
      console.log('An error ocurred while deleting user --');
      console.log(err.message);
      return null;
    }
    console.log(statusDelete);
    return statusDelete;
  },
};
