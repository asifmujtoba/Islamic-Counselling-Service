import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import bookingSvcs from '../services/booking';
import {
  updateUpcomingBooking,
  bookingSectionVisible,
  setUpcomingBookingAvailable,
} from '../actions';
import { upcomingBooking } from '../services/booking/upcomingBooking.service';

/*
  this hook retrieve the posts from the server
  update them in the redux store
  and update a booll on the redux store for let know other components that we are in posts section
*/

const options = {
  all: {
    stateName: 'upcomingBooking',
    actionCreator: updateUpcomingBooking,
  },
  
};

export const useGetUpcomingBooking = () => {
  const optionChoosed = options.all;

  const upcomingBookingList = useSelector(state => state.booking[optionChoosed.stateName]);
  const bookingList = useSelector(state => state.booking.generalBooking);
  const upcomingBookingAvailable = useSelector(state => state.booking.upcomingBookingAvailable);
  const dispatch = useDispatch();
  console.log(upcomingBookingAvailable);
  // update redux store bool, for let know other components that we are in posts section
  useEffect(() => {
    upcomingBooking(bookingList).then(booking => {
        
      dispatch(optionChoosed.actionCreator(booking));
    });
    dispatch(setUpcomingBookingAvailable(false));
    return () => dispatch(bookingSectionVisible(false));
  }, [upcomingBookingAvailable]);

  return { upcomingBookingList };
};
