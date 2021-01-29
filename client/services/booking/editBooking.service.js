import axios from 'axios';
import { logError } from '../catch.service';

export async function editBooking(bookingId, newBookingContent) {
  const { token } = JSON.parse(localStorage.getItem('user'));

  try {
    const res = await axios({
      url: `${process.env.API_URL}/booking/${bookingId}`,
      method: 'put',
      headers: {
        'Content-type': 'application/json',
        authorization: token,
      },
      data: newBookingContent,
    });

    if (res.status === 400) {
      throw new Error('the request was not successful');
    }

    return {
      status: res.status,
      bookingDoc: {
        username,
        date: res.data.date,
        time: res.data.date,
        consultant: res.data.date,
        subject: res.data.subject,
      },
    };
  } catch (err) {
    //return logError(err);
    console.log('error');
  }
}
