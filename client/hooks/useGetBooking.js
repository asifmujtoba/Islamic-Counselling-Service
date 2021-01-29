import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import bookingSvcs from '../services/booking';
import {
  updateProfileBooking,
  updateGeneralBooking,
  bookingSectionVisible,
  setNewBookingAvailable,
} from '../actions';

/*
  this hook retrieve the posts from the server
  update them in the redux store
  and update a booll on the redux store for let know other components that we are in posts section
*/

const options = {
  user: {
    stateName: 'profileBooking',
    service: bookingSvcs.retrieveUserBooking,
    actionCreator: updateProfileBooking,
  },
  all: {
    stateName: 'generalBooking',
    service: bookingSvcs.retrieveAllBooking,
    actionCreator: updateGeneralBooking,
  },

  
};

export const useGetBooking = option => {
  const optionChoosed = options[option] || options.all;

  const bookingList = useSelector(state => state.booking[optionChoosed.stateName]);
  const newBookingAvailable = useSelector(state => state.booking.newBookingAvailable);
  const dispatch = useDispatch();

  // update redux store bool, for let know other components that we are in posts section
  useEffect(() => {
    optionChoosed.service().then(booking => {
      dispatch(optionChoosed.actionCreator(booking));
    });
    dispatch(setNewBookingAvailable(false));
    dispatch(bookingSectionVisible(true));
    return () => dispatch(bookingSectionVisible(false));
  }, [newBookingAvailable]);

  return { bookingList };
};
