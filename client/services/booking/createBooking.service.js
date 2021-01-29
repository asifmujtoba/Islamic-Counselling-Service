import axios from 'axios';
import { logError } from '../catch.service';

export async function createBooking(newPub) {
  const { username, token } = JSON.parse(localStorage.getItem('user'));

  try {
    const res = await axios({
      url: `${process.env.API_URL}/booking/create/${username}`,
      method: 'post',
      headers: {
        'Content-type': 'application/json',
        authorization: token,
      },
      data: newPub,
    });

    
    if (res.status === 400) {
      throw new Error('bad request: could not save new publication');
    }
    return {
      id: res.data._id,
      status: res.status,
      bookingDoc: {
        user: username,
        date: res.data.date,
        time: res.data.time,
        consultant: res.data.consultant,
        subject: res.data.subject,
        message: res.data.message,
      },
      
    };
    
  } catch (error) {
    return logError(error);
  }
}
