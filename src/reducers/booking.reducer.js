import { bookingConstants } from '../actions/types';

export function bookingReducer(state = {}, action) {
  switch (action.type) {
    case bookingConstants.UPDATE_GENERAL_BOOKING:
      return {
        ...state,
        generalBooking: action.payload,
      };
    case bookingConstants.UPDATE_PROFILE_BOOKING:
      return {
        ...state,
        profileBooking: action.payload,
      };
    case bookingConstants.UPDATE_UPCOMING_BOOKING:
      return {
        ...state,
        upcomingBooking: action.payload,
      }
    case bookingConstants.ADD_NEW_BOOKING:
      return {
        ...state,
        profileBooking: [...state.profileBooking, action.payload],
        generalBooking: [...state.generalBooking, action.payload],
        upcomingBooking: [...state.upcomingBooking, action.payload],
      };
    case bookingConstants.REMOVE_BOOKING:
      return {
        ...state,
        profileBooking: state.profileBooking.filter(
          el => el._id !== action.payload
        ),
        generalBooking: state.generalBooking.filter(
          el => el._id !== action.payload
        ),
      };
    case bookingConstants.SHOW_BOOKING_FORM:
      return {
        ...state,
        showBookingForm: action.payload.status,
      };
    case bookingConstants.SET_BOOKING_FORM:
      return {
        ...state,
        bookingFormData: action.payload,
      };
    case bookingConstants.BOOKING_SECTION_VISIBLE:
      return {
        ...state,
        bookingSectionVisible: action.payload.status,
      };
    case bookingConstants.SET_NEW_BOOKING_AVAILABLE:
      return {
        ...state,
        newBookingAvailable: action.payload.status,
      };
      case bookingConstants.SET_UPCOMING_BOOKING_AVAILABLE:
        return {
          ...state,
          upcomingBookingAvailable: action.payload.status,
        };
    default:
      return state;
  }
}
