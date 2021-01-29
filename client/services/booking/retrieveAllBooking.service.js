import axios from 'axios';
import { logError } from '../catch.service';
import { formatAllBooking } from '../../helpers/formatBooking';

export async function retrieveAllBooking() {
  const { token } = JSON.parse(localStorage.getItem('user'));
  try {
    const res = await axios.get(`${process.env.API_URL}/booking`, {
      headers: {
        accept: 'application/json',
        authorization: token,
      },
    });
    if (res.status === 400) {
      throw new Error('bad request: could not retrieve all posts');
    }
    return formatAllBooking(res.data);
  } catch (err) {
    return logError(err);
  }
}
