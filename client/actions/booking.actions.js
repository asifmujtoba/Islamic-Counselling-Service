import booking from '../services/booking';
import { bookingConstants} from './types';

export function updateProfileBooking(newBooking) {
  return {
    type: bookingConstants.UPDATE_PROFILE_BOOKING,
    payload: newBooking,
  };
}

export function updateGeneralBooking(newBooking) {
  return {
    type: bookingConstants.UPDATE_GENERAL_BOOKING,
    payload: newBooking,
  };
}

export function updateUpcomingBooking(newBooking){
  return {
    type: bookingConstants.UPDATE_UPCOMING_BOOKING,
    payload: {...newBooking},
  }
}

export function addNewBooking(newBooking) {
  return {
    type: bookingConstants.ADD_NEW_BOOKING,
    payload: newBooking,
  };
}

export function removeBooking(bookingId) {
  return {
    type: bookingConstants.REMOVE_BOOKING,
    payload: bookingId,
  };
}

export function showBookingForm(status) {
  return {
    type: bookingConstants.SHOW_BOOKING_FORM,
    payload: {
      status,
    },
  };
}

export function setBookingForm(
  status = false,
  type = 'create',
  bookingData = { id: '', date: '', time: '', consultant: '', subject: ''  }
) {
  return {
    type: bookingConstants.SET_BOOKING_FORM,
    payload: {
      status,
      type,
      bookingData,
    },
  };
}

export function bookingSectionVisible(status) {
  return {
    type: bookingConstants.BOOKING_SECTION_VISIBLE,
    payload: {
      status,
    },
  };
}

export function setNewBookingAvailable(status) {
  return {
    type: bookingConstants.SET_NEW_BOOKING_AVAILABLE,
    payload: {
      status,
    },
  };
}
export function setUpcomingBookingAvailable(status) {
  return {
    type: bookingConstants.SET_UPCOMING_BOOKING_AVAILABLE,
    payload: {
      status,
    },
  };
}
