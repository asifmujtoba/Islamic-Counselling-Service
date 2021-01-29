import { logError } from '../catch.service';
import { formatAllBooking } from '../../helpers/formatBooking';

export async function upcomingBooking(bookings) {
  const userData = JSON.parse(localStorage.getItem('user'));
  try {
    console.log(bookings);
    return formatAllBooking(bookings);
  } catch (err) {
    return logError(err);
  }
}
