import bookingSvcs from '../../../services/booking';
import {useSelector} from 'react-redux';
import { setNewBookingAvailable } from '../../../actions';


/*
  To avoid creating two hooks for create and update a post
  this hook could makes both, since the behaviour is similar
*/

/*
  by default the type is for create a new post
  we dont need to worry about setting a default value on postId
  because the parent component already do it
*/

export const useSaveBooking = (
  type = 'create',
  formState,
  handleSuccess = () => {},
  handleFailure = () => {},
  bookingId
) => {
  const { createBooking, editBooking } = bookingSvcs;
  
  const username = useSelector(state => state.userInfo.username);
  var userData = JSON.parse(localStorage.getItem('user'));
  
  

  // function returned to trigger save booking behavior
  const saveBooking = async () => {
    // save post
   
    const newBooking = {
      date: formState.date,
      time: formState.time,
      consultant: formState.consultant,
      subject: formState.subject,
      message: formState.message,
      user: username,
    };

    const { id, status, bookingDoc } =
      type === 'edit'
        ? await editBooking(bookingId, newBooking)
        : await createBooking(newBooking);
    

    if (status === 200) {
      setNewBookingAvailable(true);
      userData.booking.push(id);
      localStorage.setItem('user', JSON.stringify(userData));
      handleSuccess();
    } else {
      console.log("Failure")
      handleFailure();
    }
  };

  return { saveBooking };
};
